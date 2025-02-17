import styled from "styled-components";

export const WrapAuthLayout = styled.section`
  width: 100vw;
  height: 100vh;

  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(69, 86, 102, 1) 0%,
    rgba(34, 34, 34, 1) 90%
  );

  @media ${(props) => props.theme.breakpoints.mdMax} {
    padding: 0;
  }
`;
