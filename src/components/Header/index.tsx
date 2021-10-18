import { CgLogOut } from 'react-icons/cg';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { HeaderContainer } from './styles';
import logoImg from '../../assets/logoteste.png';

export const Header: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <div className="imgContainer">
        <img src={logoImg} alt="logo" />
        <span>
          Olá,
          {' '}
          {user.username}
          !
        </span>
      </div>
      <CgLogOut cursor="pointer" onClick={signOut} size={30} color="#91c787" className="menu" />
    </HeaderContainer>
  );
};
