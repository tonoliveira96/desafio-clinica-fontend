import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import { Container, Clinics } from './styles';

const Home: React.FC = () => {
  return (
    <>
    <Header title="Clínicas" />
    <Container>
      <Clinics>
        <Link to="/details">
        </Link>
      </Clinics>
    </Container>
    </>
  );
}

export default Home;
