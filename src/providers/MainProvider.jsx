import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "../context/authContext/AuthContextProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import StateContextProvider from "../context/StateContext/StateContextProvider";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

function MainProvider({ children }) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <StateContextProvider>
            <HelmetProvider>{children}</HelmetProvider>
          </StateContextProvider>
        </AuthContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default MainProvider;
