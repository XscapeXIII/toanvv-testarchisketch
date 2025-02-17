import Head from "next/head";
import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useRouter } from "next/router";

import { useAppSelector } from "@/hooks/useRedux";

import LoadingScreen from "../../common/Loading";

import * as S from "./auth-layout.styles";

type AuthLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function AuthLayout({
  title = "Bravo",
  children,
}: AuthLayoutProps) {
  const router = useRouter();
  const { isAuth } = useAppSelector((state) => state.auth);

  useLayoutEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth, router, router.pathname]);

  if (isAuth) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="bravo" />
        <meta name="keywords" content="bravo" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <S.WrapAuthLayout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </S.WrapAuthLayout>
    </>
  );
}
