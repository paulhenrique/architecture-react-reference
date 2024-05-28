import React from "react";
import { store } from "store";
import { Provider } from "react-redux";

export interface ReduxProviderProps {
  children: React.ReactNode;
}

/**
 * Provedor do Redux para a aplicação
 * @author @cpqd
 * @returns {JSX.Element}
 */
const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
