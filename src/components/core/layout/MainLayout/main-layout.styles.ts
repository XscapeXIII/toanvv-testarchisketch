import styled from "styled-components";

export const WrapMainLayout = styled.section`
  width: 100vw;
  height: 100vh;

  @media ${(props) => props.theme.breakpoints.mdMax} {
    padding: 0;
  }
`;
