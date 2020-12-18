import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import TagService from '../../components/TagService';
import api from '../../services/api';

import { Container, ClinicContainer, ClinicHeader, ClinicInfo } from './styles';

interface IClinicsProps {
  id: number;
  name: string;
  email: string;
  cep: string;
  adress: string;
  phone: string;
  services: string;
  about: string;
}

interface ClinicParams {
  id: string;
}

const Details: React.FC = () => {
  const params = useParams<ClinicParams>();
  const [clinic, setClinic] = useState<IClinicsProps>();

  useEffect(() => {
    api.get(`clinic/${params.id}`).then((response) => {
      setClinic(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  if (!clinic) {
    return <p>carregando...</p>;
  }
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
              <strong>{clinic.name}</strong>
              <p>E-mail: {clinic.email}</p>
              <p>Telefone: {clinic.phone}</p>
              <br/>
              <TagService content={clinic.services} />

            </div>
          </ClinicHeader>
          <ClinicInfo>
            <h2>Endereço</h2>
            <p>{clinic.adress}, CEP: {clinic.cep}</p>
          </ClinicInfo>

          <ClinicInfo>
            <h2>Sobre</h2>
            <p>
              {clinic.about}
            </p>
          </ClinicInfo>
        </ClinicContainer>
      </Container>
    </>
  );
};

export default Details;
