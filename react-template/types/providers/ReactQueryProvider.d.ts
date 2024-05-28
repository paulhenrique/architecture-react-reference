/// <reference types="react" />
export interface ReactQueryProviderProps {
    children: React.ReactNode;
}
/**
 * Provedor do React Query para a aplicação
 * @author @cpqd
 * @returns {JSX.Element}
 */
declare const ReactQueryProvider: ({ children }: ReactQueryProviderProps) => import("react/jsx-runtime").JSX.Element;
export default ReactQueryProvider;
