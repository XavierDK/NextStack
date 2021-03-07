import { useEffect } from 'react';
import config from '../constants/config';
import appMachine, { AppServiceType, loginUpdater } from '../machines/app/appMachine';
import { useUser } from '@auth0/nextjs-auth0';
import { useMachine } from '@xstate/react';

const useAppMachine = (): AppServiceType => {
  const context = {
    isDebugEnabled: config.isDebugEnabled,
    user: undefined
  };
  const [, send, service] = useMachine(appMachine.withContext(context), { devTools: true });
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      send(loginUpdater.update(user));
    } else {
      send('USER_LOGOUT', user);
    }
  }, [user, send]);

  return service;
};

export default useAppMachine;
