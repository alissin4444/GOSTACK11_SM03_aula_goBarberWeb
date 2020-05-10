import styled, { keyframes } from "styled-components";

import { shade } from "polished";

import background from "../../assets/sign-up-background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const apearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${apearFromRight} 1s;

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #888;
      text-decoration: none;
      display: block;
      margin-top: 24px;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#444")};
      }
    }
  }

  > a {
    color: #666;
    text-decoration: none;
    margin-top: 24px;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, "#666")};
    }

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  background: url(${background}) no-repeat center;
  background-size: cover;

  flex: 1;
`;
