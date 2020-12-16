import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerRoute } from './styles';

interface IHeaderProps {
  title: string
}

const Header: React.FC<IHeaderProps> = ({title}) => {
  return (
    <Container>
      <h1>{title}</h1>

      <ContainerRoute>
      <Link to="/create">Cadastrar</Link>

      </ContainerRoute>

    </Container>
  );
}

export default Header;
