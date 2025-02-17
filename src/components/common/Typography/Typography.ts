import styled from "styled-components";
import { css } from "styled-components";

export const H1 = styled.h1<{
  $color?: string;
  $padding?: string;
  $margin?: string;
}>`
  color: ${(props) => props.$color || props.theme.colors.newtral};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

export const H2 = styled.h2<{
  $color?: string;
  $padding?: string;
  $margin?: string;
}>`
  color: ${(props) => props.$color || props.theme.colors.newtral};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

export const H3 = styled.h3<{
  $color?: string;
  $padding?: string;
  $margin?: string;
}>`
  color: ${(props) => props.$color || props.theme.colors.newtral};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

export const H4 = styled.h4<{
  $color?: string;
  $padding?: string;
  $margin?: string;
}>`
  color: ${(props) => props.$color || props.theme.colors.newtral};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

export const H5 = styled.h5<{
  $color?: string;
  $padding?: string;
  $margin?: string;
}>`
  color: ${(props) => props.$color || props.theme.colors.newtral};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;

export const P = styled.p<{
  $color?: string;
  $padding?: string;
  $margin?: string;
}>`
  color: ${(props) => props.$color || props.theme.colors.newtral};

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin: ${props.$margin};
    `}
`;
