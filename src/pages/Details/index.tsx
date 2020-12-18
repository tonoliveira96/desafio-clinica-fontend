import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import TagService from '../../components/TagService';
import api from '../../services/api';

import { Container, ClinicContainer, ClinicHeader, ClinicInfo } from './styles';

import WhatsAppLogo from '../../assets/whatsapp-logo-1.png'

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
  const [whatsApp, setWhatsApp] = useState("");

  useEffect(() => {
    api.get(`clinic/${params.id}`).then((response) => {
      setClinic(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  if (!clinic) {
    return <p>carregando...</p>;
  }
  // else{
  //   var numsStr = clinic?.phone.replace(/[^0-9]/g,'');
  //   setWhatsApp(numsStr)
  // }


  return (
    <>
      <Header title="Detalhes" hiddeButtonBack={false} showButton={false} />
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
              <span>Serviços: </span> <TagService content={clinic.services} />
              <br/>
              <a href={`https://api.whatsapp.com/send/?phone=55`} target="blank">WhatApp
                <img src={WhatsAppLogo} alt="WhatsAppLogo"/>
              </a >

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
