import { useEffect } from 'react';
import config from '../constants/config';
import appMachine, { AppServiceType, loginUpdater } from '../machines/app/appMachine';
import { useMachine } from '@xstate/react';
import { useAuthUser } from 'next-firebase-auth';

const useAppMachine = (): AppServiceType => {
  const context = {
    isDebugEnabled: config.isDebugEnabled,
    user: undefined
  };
  const [, send, service] = useMachine(appMachine.withContext(context), { devTools: true });
  const { firebaseUser } = useAuthUser();
  useEffect(() => {
    if (firebaseUser) {
      send(loginUpdater.update(firebaseUser));
    } else {
      send('USER_LOGOUT');
    }
  }, [firebaseUser, send]);

  return service;
};

export default useAppMachine;
