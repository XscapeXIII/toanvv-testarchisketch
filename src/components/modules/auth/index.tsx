import React, { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Form, message } from "antd";
import { useRouter } from "next/router";

import themeColors from "@/styles/themes/default";
import { useAppDispatch } from "@/hooks/useRedux";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Typography from "@/components/common/Typography";
import Checkbox from "@/components/common/Checkbox";

import * as S from "./auth.styles";

const SignIn = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = (values: any) => {
    try {
      setIsLoading(true);

      //HANDLE API
      // console.log('values', values)
      // await response =  API
      // dispatch(
      //   actionLogin({
      //     isAuth: true,
      //     userInfo: res?.data?.user,
      //     accessToken: res?.data?.accessToken,
      //     refreshToken: res?.data?.refreshToken,
      //     rememberMe: values?.rememberMe,
      //   })
      // );

      router.push("/");
      message.success("Đăng nhập thành công");
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Wrap>
      <S.WrapForm>
        <Typography
          variant="h2"
          color={themeColors.primary}
          margin="0 0 24px 0"
        >
          Sign-In
        </Typography>
        <Form form={form} onFinish={handleLogin}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Required!",
              },
            ]}
          >
            <Input
              label="UserName"
              placeholder="Username"
              colorLabel={themeColors.primaryDark}
              required
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Required!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              suffix={
                showPassword ? (
                  <EyeOutlined onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <EyeInvisibleOutlined
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )
              }
              label="PassWord"
              placeholder="Password"
              required
              type={showPassword ? "text" : "password"}
              colorLabel={themeColors.primaryDark}
            />
          </Form.Item>
        </Form>
        <Form.Item name="rememberMe" valuePropName="checked">
          <Checkbox>
            <Typography variant="body-text-small">Remember Me</Typography>
          </Checkbox>
        </Form.Item>
        <Button type="primary" onClick={form.submit} isLoading={isLoading}>
          Submit
        </Button>
      </S.WrapForm>
    </S.Wrap>
  );
};

export default SignIn;
