import React from "react";
import ReduxProvider from "providers/ReduxProvider";
import ReactQueryProvider from "providers/ReactQueryProvider";
import AntdThemeProvider from "./AntdThemeProvider";
import AuthProvider from "./AuthProvider";

export interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Provedor de todos os provedores da aplicação
 * @author @cpqd
 * @returns
 */
const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ReduxProvider>
        <ReactQueryProvider>
          <AntdThemeProvider>{children}</AntdThemeProvider>
        </ReactQueryProvider>
      </ReduxProvider>
    </AuthProvider>
  );
};

export default Providers;
