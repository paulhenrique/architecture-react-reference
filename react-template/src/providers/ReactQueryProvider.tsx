import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export interface ReactQueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

/**
 * Provedor do React Query para a aplicação
 * @author @cpqd
 * @returns {JSX.Element}
 */
const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
