import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import webStorage from "@/utils/webStorageClient";
import { IS_AUTH, REFRESH_TOKEN, USER_INFO } from "@/settings/constants";

const isAuthFromStorage: boolean = webStorage.get(IS_AUTH);
const userInfoFromStorage: object = webStorage.get(USER_INFO);

export interface AuthInterface {
  isAuth: boolean;
  userInfo: any;
  error: any;
  modalConfirmAccount: {
    type: "EMAIL" | "PHONE";
    status: boolean;
    data: string;
  } | null;
  showVerifyModal: boolean;
  forgotData: {
    email?: string;
    phone?: string;
  } | null;
  otpForgot: string | null;
  showModalLogin: boolean;
}

const initialState: AuthInterface = {
  isAuth: isAuthFromStorage || false,
  userInfo: userInfoFromStorage || {},
  error: {},
  modalConfirmAccount: null,
  showVerifyModal: false,
  forgotData: null,
  otpForgot: null,
  showModalLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    actionLogin: (state, action: PayloadAction<any>) => {
      const { rememberMe } = action.payload;
      state.isAuth = action.payload?.isAuth;
      state.userInfo = action.payload?.userInfo;
      webStorage.set(
        IS_AUTH,
        action.payload?.isAuth,
        rememberMe ? { expires: 30 } : {}
      );
      webStorage.set(
        USER_INFO,
        action.payload?.userInfo,
        rememberMe ? { expires: 30 } : {}
      );
      webStorage.setToken(
        action.payload?.accessToken,
        rememberMe ? { expires: 30 } : {}
      );
      webStorage.set(
        REFRESH_TOKEN,
        action.payload?.refreshToken,
        rememberMe ? { expires: 30 } : {}
      );
    },

    actionShowModalLogin: (state, action: PayloadAction<any>) => {
      state.showModalLogin = action.payload?.data;
    },

    actionVerifyAccount: (state, action: PayloadAction<any>) => {
      state.modalConfirmAccount = action.payload?.data;
    },

    actionVerifyShowModal: (state, action: PayloadAction<any>) => {
      state.showVerifyModal = action.payload?.status;
    },

    actionForgot: (state, action) => {
      state.forgotData = action.payload;
    },

    actionSetOtp: (state, action) => {
      state.otpForgot = action.payload;
    },

    actionLogout: (state) => {
      state.isAuth = false;
      state.userInfo = {};
      state.error = {};
      webStorage.removeAll();
    },

    actionUpdateAvatar: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        avatar: action.payload,
      };
      webStorage.set(USER_INFO, {
        ...state.userInfo,
        avatar: action.payload,
      });
    },

    actionUpdateVideo: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        introductionVideo: action.payload,
      };
      webStorage.set(USER_INFO, {
        ...state.userInfo,
        introductionVideo: action.payload,
      });
    },
  },

  extraReducers: {},
});

export const {
  actionLogin,
  actionLogout,
  actionVerifyAccount,
  actionVerifyShowModal,
  actionForgot,
  actionSetOtp,
  actionShowModalLogin,
  actionUpdateAvatar,
  actionUpdateVideo,
} = authSlice.actions;
export default authSlice.reducer;
