import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import StateContextProvider from "../context/StateContext/StateContextProvider";
import { HelmetProvider } from "react-helmet-async";
import AuthContextProvider from "../context/AuthContext/AuthContextProvider";
import { ConfigProvider } from "antd";
import { customTheme } from "../utils/customAntd";

const queryClient = new QueryClient();

function MainProvider({ children }) {
  return (
    <div>
      <ConfigProvider theme={customTheme}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <StateContextProvider>
              <HelmetProvider>{children}</HelmetProvider>
            </StateContextProvider>
          </AuthContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ConfigProvider>
    </div>
  );
}

export default MainProvider;
