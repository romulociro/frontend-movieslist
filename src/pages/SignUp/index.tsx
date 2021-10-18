import React, { useCallback } from 'react';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import {
  Container, Content, Background, AnimationContainer,
} from './styles';
import logoImg from '../../assets/logoteste.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

const SignUp: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Usuário obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      await api.post('/users', data);

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo" />

          <Form onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>

            <Input name="username" icon={FiUser} placeholder="Usuário" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para página inicial

          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
