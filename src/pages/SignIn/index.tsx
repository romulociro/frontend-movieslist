import React, { useCallback, useContext, useRef } from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logoteste.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface ISignFormProps{
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(async (data: ISignFormProps) => {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Usuário obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>

          <Input name="username" icon={FiUser} placeholder="Usuário" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>
        </Form>

        <a href="/#">
          <FiLogIn />
          Criar conta

        </a>
      </Content>
      <Background />
    </Container>
  );
};
export default SignIn;
