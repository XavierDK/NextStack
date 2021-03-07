import { Interpreter, Machine, MachineConfig, PayloadSender, State } from 'xstate';
import appMachineOptions from './appMachineOptions';
import { UserProfile } from '@auth0/nextjs-auth0';
import { createUpdater, ImmerUpdateEvent } from '@xstate/immer';

/**
 * The schema definition of the machine
 */
interface AppStateSchema {
  states: {
    user: {
      states: {
        loggedOut: Record<string, never>;
        loggedIn: Record<string, never>;
      };
    };
    drawer: {
      states: {
        closed: Record<string, never>;
        opened: Record<string, never>;
      };
    };
    debug: {
      states: {
        disabled: Record<string, never>;
        enabled: {
          states: {
            xstateInspect: {
              states: {
                idle: Record<string, never>;
                launch: Record<string, never>;
              };
            };
          };
        };
      };
    };
  };
}

/**
 * The events that the machine handles
 */

type LoginUpdateEvent = ImmerUpdateEvent<'USER_LOGIN', UserProfile>;

export const loginUpdater = createUpdater<AppContext, LoginUpdateEvent>('USER_LOGIN', (ctx, { input }) => {
  ctx.user = input;
});

export type AppEvent =
  | { type: 'TOGGLE_DRAWER' }
  | { type: 'OPEN_XSTATE_INSPECT' }
  | LoginUpdateEvent
  | { type: 'USER_LOGOUT' };

/**
 * The context (extended state) of the machine
 */
export interface AppContext {
  isDebugEnabled: boolean;
  user: UserProfile;
}

/**
 * Useful types
 */
export type AppMachineType = MachineConfig<AppContext, AppStateSchema, AppEvent>;
export type AppServiceType = Interpreter<AppContext>;
export type AppStateType = [State<AppContext>, PayloadSender<AppEvent>];

/**
 * The App machine
 */
export default Machine<AppContext, AppStateSchema, AppEvent>(
  {
    key: 'app',
    type: 'parallel',
    states: {
      user: {
        initial: 'loggedOut',
        states: {
          loggedOut: {
            on: {
              [loginUpdater.type]: {
                target: 'loggedIn',
                actions: loginUpdater.action
              }
            }
          },
          loggedIn: {
            on: {
              USER_LOGOUT: { target: 'loggedOut', actions: 'assignUser' }
            }
          }
        }
      },
      drawer: {
        initial: 'closed',
        states: {
          closed: {
            on: {
              TOGGLE_DRAWER: 'opened'
            }
          },
          opened: {
            on: {
              TOGGLE_DRAWER: 'closed'
            }
          }
        }
      },
      debug: {
        initial: 'disabled',
        states: {
          disabled: {
            always: [{ target: 'enabled', cond: 'isDebugEnabled' }]
          },
          enabled: {
            type: 'parallel',
            states: {
              xstateInspect: {
                initial: 'idle',
                states: {
                  idle: {
                    entry: 'disableInspect',
                    on: {
                      OPEN_XSTATE_INSPECT: 'launch'
                    }
                  },
                  launch: {
                    entry: 'launchInspect'
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  appMachineOptions
);
