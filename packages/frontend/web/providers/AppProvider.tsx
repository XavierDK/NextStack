import React, { ReactElement } from 'react';
import useAppMachine from '../hooks/useAppMachine';
import { AppServiceType } from '../machines/app/appMachine';

export const AppContext = React.createContext<AppServiceType>(undefined);

type Props = {
  children: ReactElement | ReactElement[] | null;
};

const AppProvider = ({ children }: Props): ReactElement => {
  const service = useAppMachine();
  return <AppContext.Provider value={service}>{children}</AppContext.Provider>;
};

export default AppProvider;
