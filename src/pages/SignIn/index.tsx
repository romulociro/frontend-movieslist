import React from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi'

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logoteste.png'

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <form>
          <h1>Faça seu Login</h1>

          <Input name="user" icon={FiUser} placeholder="Usuário" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha"  />

          <Button type="submit">Entrar</Button>
        </form>

        <a href="/#">
          <FiLogIn />
          Criar conta</a>
      </Content>
      <Background />
    </Container>
  )

export default SignIn;
