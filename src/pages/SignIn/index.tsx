import React from 'react';
import { Image } from 'react-native';
import { Container, Title, } from './styles';
import Input from '../../components/Input/Index';
import Button from '../../components/Button/Index';

import logoImg from '../../assets/logo.png';

// import { Container } from './styles';

const SignIn: React.FC = () => {
  return   <Container>
    <Image source={logoImg} />
    <Title>Faça seu Logon</Title>

    <Input name="email" icon="mail" placeholder="E-mail"/>
    <Input name="password" icon="lock" placeholder="Senha" />

    <Button onPress={() => {}}>Entrar</Button>
  </Container>
}

export default SignIn;