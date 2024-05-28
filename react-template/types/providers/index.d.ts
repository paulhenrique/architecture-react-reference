import React from "react";
export interface ProvidersProps {
    children: React.ReactNode;
}
/**
 * Provedor de todos os provedores da aplicação
 * @author @cpqd
 * @returns
 */
declare const Providers: ({ children }: ProvidersProps) => import("react/jsx-runtime").JSX.Element;
export default Providers;
