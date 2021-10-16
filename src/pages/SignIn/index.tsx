import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logoteste.png'

const SignIn: React.FC = () => (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <form>
          <h1>Faça seu Login</h1>
          <input placeholder="Usuário" />
          <input type="password" placeholder="Senha"  />
          <button type="submit">Entrar</button>
        </form>

        <a href="/#">
          <FiLogIn />
          Criar conta</a>
      </Content>
      <Background />
    </Container>
  )

export default SignIn;
