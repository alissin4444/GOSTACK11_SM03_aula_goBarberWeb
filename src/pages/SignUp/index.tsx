import React, { useCallback, useRef } from "react";

import { Link, useHistory } from "react-router-dom";

import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";

import api from "../../services/api";

import { useToast } from "../../hooks/ToastContext";

import getValidationErrors from "../../utils/getValidationErrors";

import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, AnimatedContainer, Background } from "./styles";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string()
            .required("Email obrigatório")
            .email("Digite um email válido"),
          password: Yup.string().min(6, "Mínimo 6 dígitos"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post("users", data);

        addToast({
          type: "success",
          title: "Cadastro realizado",
          description: "Você já pode fazer seu logon no GoBarber!",
        });

        history.push("/");
      } catch (err) {
        formRef.current?.setErrors(getValidationErrors(err));

        addToast({
          title: "Erro ao realizar o cadastro",
          type: "error",
          description: "Ocorreu um erro com o cadastro. Tente novamente",
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimatedContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
