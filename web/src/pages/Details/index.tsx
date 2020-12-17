import React from 'react';
import Header from '../../components/Header';

import { Container, ClinicContainer, ClinicHeader, ClinicInfo } from './styles';

const Details: React.FC = () => {
  return (
    <>
      <Header title="Clínica tal" hiddeButtonBack={false} showButton={false} />
      <Container>
        <ClinicContainer>
          <ClinicHeader>
            <img
              src="https://cdn.pixabay.com/photo/2017/02/01/13/52/analysis-2030261_960_720.jpg"
              alt="clinica"
            />
            <div>
              <strong>Clínica Tal</strong>
              <p>E-mail: email@email.com</p>
              <p>Telefone: (11) 3333-3333</p>
            </div>
          </ClinicHeader>

          <ClinicInfo>
            <h2>Sobre</h2>
            <p>É um fato estabelecido há muito t</p>
          </ClinicInfo>
        </ClinicContainer>
      </Container>
    </>
  );
};

export default Details;
