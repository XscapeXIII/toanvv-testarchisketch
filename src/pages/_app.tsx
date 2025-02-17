import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import NextProgress from "next-progress";

import { store } from "@/store";
import GlobalStyle from "@/styles/global";
import { routersAuth } from "@/settings/protected";
import { theme } from "@/styles/themes";

const MainLayout = dynamic(
  () => import("@/components/core/layout/MainLayout"),
  { ssr: false }
);

const AuthLayout = dynamic(
  () => import("@/components/core/layout/AuthLayout"),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  console.log("router", router?.pathname);

  const getLayout = useCallback(() => {
    if (routersAuth?.includes(router?.pathname)) {
      return AuthLayout;
    } else return MainLayout;
  }, [router.pathname]);

  const Layout = getLayout();

  const renderComponent = () => {
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>

      <Provider store={store}>
        <ThemeProvider theme={theme.default}>
          <GlobalStyle />
          <NextProgress
            options={{ showSpinner: false }}
            color={theme.default.colors.primary}
            height="4px"
          />
          {renderComponent()}
        </ThemeProvider>
      </Provider>
    </>
  );
}
