import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import { Container, Clinics } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header title="Clínicas" hiddeButtonBack showButton/>
      <Container>
        <Clinics>
          <Link to="/details">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/01/13/52/analysis-2030261_960_720.jpg"
              alt="clinica"
            />
            <div>
              <strong>Clínica tal</strong>
              <br/>
              <label>irri pororo</label>
              <label>irri pororo</label>
              <label>irri pororo</label>
            </div>
            <FiArrowRight size={20} color="#000" />
          </Link>
        </Clinics>
      </Container>
    </>
  );
};

export default Home;
