import { motion } from "framer-motion";

import * as S from "./main-layout.styles";
import { useLayoutEffect } from "react";
import { useAppSelector } from "@/hooks/useRedux";
import { useRouter } from "next/router";

const MainLayout = () => {
  const router = useRouter();
  const { isAuth } = useAppSelector((state) => state.auth);

  useLayoutEffect(() => {
    if (!isAuth) {
      router.push("/auth/sign-in");
    }
  }, [isAuth, router]);

  return (
    <S.WrapMainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Dashboard
      </motion.div>
    </S.WrapMainLayout>
  );
};

export default MainLayout;
