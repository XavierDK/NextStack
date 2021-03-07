import { AppContext } from './appMachine';
import { Storage } from '../../utils/storage';

export default {
  guards: {
    isDebugEnabled: (context: AppContext): boolean => {
      return context.isDebugEnabled;
    }
  },
  actions: {
    disableInspect: (): void => Storage.disableXStateInspect(),
    launchInspect: (): void => {
      Storage.enableXStateInspect();
      location.reload();
    }
  }
};
