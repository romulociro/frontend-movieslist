import React, { useCallback, useContext } from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logoteste.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthContext';

interface ISignFormProps{
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(async (data: ISignFormProps) => {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Usuário obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      signIn({
        username: data.username,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
    }
  }, [signIn]);

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
