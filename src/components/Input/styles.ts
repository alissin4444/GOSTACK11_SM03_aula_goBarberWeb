import styled, { css } from "styled-components";

import { lighten } from "polished";

import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #e2e8ea;
  border-radius: 10px;
  border: 2px solid #e2e8ea;
  padding: 16px;
  width: 100%;
  color: #888;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${lighten(0.3, "#c53030")};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  
    

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #555;

    &::placeholder {
      color: #888;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  svg {
    margin: 0;
    margin: 0 8px;
  }

  span {
    background: ${lighten(0.1, "#c53030")};

    &::before {
      border-color: ${lighten(0.1, "#c53030")} transparent;
    }
  }
`;
