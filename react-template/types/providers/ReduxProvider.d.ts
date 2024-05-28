import React from "react";
export interface ReduxProviderProps {
    children: React.ReactNode;
}
/**
 * Provedor do Redux para a aplicação
 * @author @cpqd
 * @returns {JSX.Element}
 */
declare const ReduxProvider: ({ children }: ReduxProviderProps) => import("react/jsx-runtime").JSX.Element;
export default ReduxProvider;
