import React from "react";

import { useAppDispatch } from "@/hooks/useRedux";
import { actionLogout } from "@/store/slice/auth";

import Typography from "@/components/common/Typography";
import ButtonCommon from "@/components/common/Button";

import * as S from "./dashboard.styles";

const DashBoard = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(actionLogout());
  };
  return (
    <S.Wrap>
      <Typography>WELCOME TO DASHBOARD</Typography>
      <ButtonCommon onClick={handleLogout}>Logout</ButtonCommon>
    </S.Wrap>
  );
};

export default DashBoard;
