import styled, { css } from "styled-components";

import { Input, InputNumber } from "antd";

import { InputPropsStyles } from ".";

export const InputWrapper = styled.div<InputPropsStyles>`
  margin-bottom: 0px;
`;

export const Label = styled.label<InputPropsStyles>`
  color: ${({ theme }) => theme.colors.newtral};
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  display: block;
  margin-bottom: 6px;
`;

export const TextareaCommon = styled(Input.TextArea)<InputPropsStyles>`
  &.ant-input-affix-wrapper,
  &.ant-input {
    padding: 10px 15px;
    border: 1px solid
      ${(props) => props.borderColor || props.theme.colors.newtral};
    color: ${(props) => props.color || props.theme.colors.newtral};
    background: ${(props) =>
      props.backgroundColor || props.theme.colors.newtralLightest};
    border-radius: ${({ theme }) => theme.radius.normalRadius};
    font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
    font-weight: ${(props) =>
      props.fontWeight || props.theme.fontWeight.regular};
    line-height: 1.7;
    height: auto;

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-input-affix-wrapper-focused {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme.colors.newtral};
      color: ${(props) => props.color || props.theme.colors.newtral};
      border: 1px solid
        ${(props) => props.borderColor || props.theme.colors.primary};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.newtral};
      background: rgba(0, 0, 0, 0.04);
      color: ${({ theme }) => theme.colors.newtralDark};
      border: 1px solid ${(props) => props.theme.colors.newtralLight};
    }

    ${(props) =>
      props.width &&
      css`
        max-width: ${props.width};
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

    ${(props) =>
      props.padding &&
      css`
        padding: ${props.padding};
      `}

  .ant-input-prefix {
      color: ${({ theme }) => theme.colors.newtralDark};
      margin-right: 9px;
      font-size: 16px;
    }

    .ant-input-suffix {
      color: ${({ theme }) => theme.colors.newtralDark};
      margin-left: 9px;
      font-size: 14px;
    }

    &.ant-input-affix-wrapper-status-error {
      border-color: ${({ theme }) => theme.colors.errorDark} !important;

      .ant-input-prefix .anticon {
        color: ${({ theme }) => theme.colors.newtralDark} !important;
      }

      .ant-input-suffix .anticon {
        color: ${({ theme }) => theme.colors.errorDark} !important;
      }
    }
  }
`;

export const InputNumberCommon = styled(InputNumber)<InputPropsStyles>`
  &.ant-input-number {
    border: 1px solid
      ${(props) => props.borderColor || props.theme.colors.newtral};
    color: ${(props) => props.color || props.theme.colors.newtral};
    background: ${(props) =>
      props.backgroundColor || props.theme.colors.newtralLightest};
    border-radius: ${({ theme }) => theme.radius.normalRadius};
    height: auto;
    width: auto;

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-input-number-focused {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.color || props.theme.colors.newtral};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.newtral};
      background: rgba(0, 0, 0, 0.04);
      color: ${({ theme }) => theme.colors.newtral};
      border: 1px solid ${(props) => props.theme.colors.newtralLight};
    }

    ${(props) =>
      props.width &&
      css`
        max-width: ${props.width};
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

  .ant-input-number-input {
      padding: 10px 25px 10px 15px;
      min-width: 100px;
      color: ${(props) => props.color || props.theme.colors.newtral};
      font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
      font-weight: ${(props) =>
        props.fontWeight || props.theme.fontWeight.regular};
      line-height: 1.7;
      height: auto;

      ${(props) =>
        props.padding &&
        css`
          padding: ${props.padding};
        `}
    }

    .ant-input-number-prefix {
      color: ${({ theme }) => theme.colors.newtralDark};
      margin-right: 9px;
      font-size: 16px;
    }

    &.ant-input-number-status-error {
      border-color: ${({ theme }) => theme.colors.errorDark} !important;

      .ant-input-number-prefix .anticon {
        color: ${({ theme }) => theme.colors.newtralDark} !important;
      }
    }
  }
  &.ant-input-number-affix-wrapper {
    border: 1px solid
      ${(props) => props.borderColor || props.theme.colors.primary};
    color: ${(props) => props.color || props.theme.colors.newtral};
    background: ${(props) =>
      props.backgroundColor || props.theme.colors.newtralLightest};
    border-radius: ${({ theme }) => theme.radius.normalRadius};
    height: auto;
    width: auto;

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-input-number-affix-wrapper-focused {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.color || props.theme.colors.newtral};
    }

    &:not(:disabled):hover .ant-input-number,
    &:not(:disabled):focus .ant-input-number,
    &.ant-input-number-affix-wrapper-focused .ant-input-number {
      border: none;
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.newtral};
      background: rgba(0, 0, 0, 0.04);
      color: ${({ theme }) => theme.colors.newtral};
      border: 1px solid ${(props) => props.theme.colors.newtralLight};
    }

    ${(props) =>
      props.width &&
      css`
        max-width: ${props.width};
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

    .ant-input-number-input {
      padding: 10px 25px 10px 0;
      min-width: 100px;
      color: ${(props) => props.color || props.theme.colors.newtral};
      font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
      font-weight: ${(props) =>
        props.fontWeight || props.theme.fontWeight.regular};
      line-height: 1.7;
      height: auto;

      ${(props) =>
        props.padding &&
        css`
          padding: ${props.padding};
        `}
    }

    .ant-input-number-prefix {
      color: ${({ theme }) => theme.colors.newtralDark};
      margin-right: 9px;
      font-size: 16px;
    }

    &.ant-input-number-status-error {
      border-color: ${({ theme }) => theme.colors.errorDark} !important;

      .ant-input-number-prefix .anticon {
        color: ${({ theme }) => theme.colors.newtralDark} !important;
      }
    }
  }
`;

export const InputPasswordCommon = styled(Input.Password)<InputPropsStyles>`
  &.ant-input-affix-wrapper {
    padding: 10px 15px;
    border: 1px solid
      ${(props) => props.borderColor || props.theme.colors.newtral};
    color: ${(props) => props.color || props.theme.colors.newtral};
    background: ${(props) => props.backgroundColor || "#ffffff"};
    border-radius: ${({ theme }) => theme.radius.normalRadius};
    font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
    font-weight: ${(props) =>
      props.fontWeight || props.theme.fontWeight.regular};
    line-height: 1.7;
    height: auto;

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-input-affix-wrapper-focused {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.color || props.theme.colors.newtral};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.newtral};
      background: rgba(0, 0, 0, 0.04);
      border: 1px solid ${(props) => props.theme.colors.newtralLight};
    }

    ${(props) =>
      props.width &&
      css`
        max-width: ${props.width};
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

    ${(props) =>
      props.padding &&
      css`
        padding: ${props.padding};
      `}

  .ant-input-prefix {
      color: ${({ theme }) => theme.colors.newtralDark};
      margin-right: 9px;
      font-size: 16px;
    }

    .ant-input-suffix {
      color: ${({ theme }) => theme.colors.newtralDark};
      margin-left: 9px;
      font-size: 14px;
    }

    &.ant-input-affix-wrapper-status-error {
      border-color: ${({ theme }) => theme.colors.errorDark} !important;

      .ant-input-prefix .anticon {
        color: ${({ theme }) => theme.colors.newtralDark} !important;
      }

      .ant-input-suffix .anticon {
        color: ${({ theme }) => theme.colors.errorDark} !important;
      }
    }
  }
`;

export const InputCommon = styled(Input)<InputPropsStyles>`
  &.ant-input-affix-wrapper,
  &.ant-input {
    padding: 10px 15px;
    border: 1px solid
      ${(props) => props.borderColor || props.theme.colors.newtral};
    color: ${(props) => props.color || props.theme.colors.newtral};
    background: ${(props) => props.backgroundColor || "#ffffff"};
    border-radius: ${({ theme }) => theme.radius.normalRadius};
    font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
    font-weight: ${(props) =>
      props.fontWeight || props.theme.fontWeight.regular};
    line-height: 1.7;
    height: auto;

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-input-affix-wrapper-focused {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.color || props.theme.colors.newtral};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.newtral};
      background: rgba(0, 0, 0, 0.04);
      border: 1px solid ${(props) => props.theme.colors.newtralLight};
    }

    ${(props) =>
      props.width &&
      css`
        max-width: ${props.width};
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

    ${(props) =>
      props.padding &&
      css`
        padding: ${props.padding};
      `}

    .ant-input-prefix {
      color: ${({ theme }) => theme.colors.newtralDark};
      margin-right: 9px;
      font-size: 16px;
      line-height: 1.2;
    }

    .ant-input-suffix {
      color: ${({ theme }) => theme.colors.newtralDark};
      margin-left: 9px;
      font-size: 14px;
      line-height: 1.2;
    }

    .ant-input {
      color: ${(props) => props.color || props.theme.colors.newtral};
    }

    &.ant-input-affix-wrapper-status-error {
      border-color: ${({ theme }) => theme.colors.errorDark} !important;

      .ant-input-prefix .anticon {
        color: ${({ theme }) => theme.colors.newtralDark} !important;
      }

      .ant-input-suffix .anticon {
        color: ${({ theme }) => theme.colors.errorDark} !important;
      }
    }
  }

  &.ant-input-group-wrapper {
    border-radius: ${({ theme }) => theme.radius.normalRadius};
    background: ${(props) => props.backgroundColor || "#ffffff"};
    color: ${(props) => props.color || props.theme.colors.newtral};
    font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
    font-weight: ${(props) =>
      props.fontWeight || props.theme.fontWeight.regular};
    line-height: 1.6;

    .ant-input-group-addon {
      padding: 10px 15px;
      background: transparent;
      color: ${(props) => props.color || props.theme.colors.newtral};
      border: 1px solid
        ${(props) => props.borderColor || props.theme.colors.primary};
      border-right: none;
      height: ${(props) => props.height || "46px"};

      ${(props) =>
        props.padding &&
        css`
          padding: ${props.padding};
        `}
    }

    .ant-input {
      padding: 10px 15px;
      background: transparent;
      border: 1px solid
        ${(props) => props.borderColor || props.theme.colors.primary};
      color: ${(props) => props.color || props.theme.colors.newtral};
      height: ${(props) => props.height || "46px"};

      ${(props) =>
        props.padding &&
        css`
          padding: ${props.padding};
        `}
    }

    &:not(:disabled):hover .ant-input,
    &:not(:disabled) .ant-input:focus {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.color || props.theme.colors.newtral};
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.newtral};
      background: rgba(0, 0, 0, 0.04);
      border: 1px solid ${(props) => props.theme.colors.newtralLight};
    }
  }
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.errorDark};
`;
