import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Container, ContainerTitle, ContainerRoute } from './styles';

interface IHeaderProps {
  title: string;
  hiddeButtonBack: boolean;
  showButton: boolean;
}

const Header: React.FC<IHeaderProps> = ({
  title,
  hiddeButtonBack,
  showButton,
}) => {
  const { goBack } = useHistory();
  return (
    <Container>
      <ContainerTitle hiddeButtonBack={hiddeButtonBack}>
        <FiArrowLeft
          onClick={() => {
            goBack();
          }}
          size={42}
        />
        <h1>{title}</h1>
      </ContainerTitle>

      <ContainerRoute showButton={showButton}>
        <Link to="/create">Cadastrar</Link>
      </ContainerRoute>
    </Container>
  );
};

export default Header;
