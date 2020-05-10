import React from "react";

import { useTransition } from "react-spring";

import { Container } from "./styles";

import { ToastMessage } from "../../hooks/ToastContext";

import Toast from "./Toast";

interface ToastContainerProps {
  messages: ToastMessage[];
  removeToast(id: string): void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  messages,
  removeToast,
}) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: "-120%", opacity: 0 },
      enter: { right: "0%", opacity: 1 },
      leave: { right: "-120%", opacity: 0 },
    },
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast
          key={key}
          style={props}
          message={item}
          removeToast={removeToast}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
