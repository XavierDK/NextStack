import { useService } from '@xstate/react';
import { useContext } from 'react';
import { AppStateType } from '../machines/app/appMachine';
import { AppContext } from '../providers/AppProvider';

const useAppState = (): AppStateType => {
  const service = useContext(AppContext);
  return useService(service);
};

export default useAppState;
