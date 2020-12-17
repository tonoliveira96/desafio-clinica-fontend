import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import TagService from '../../components/TagService';
import api from '../../services/api';

import { Container, Clinics } from './styles';

interface IClinicsProps {
  id: number;
  name: string;
  email: string;
  cep: string;
  adress: string;
  phone: string;
  services: string;
}

const Home: React.FC = () => {
  const [clinics, setClinics] = useState<IClinicsProps[]>([]);

  useEffect(() => {
    api.get('clinics').then((response) => {
      setClinics(response.data[0]);
      console.log(response.data[0]);
    });
  }, []);

  return (
    <>
      <Header title="Clínicas" hiddeButtonBack showButton />
      <Container>
        <Clinics>
          {clinics.map((data) => {
            return(
            <Link key={data.id} to="/details">
              <img
                src="https://cdn.pixabay.com/photo/2017/02/01/13/52/analysis-2030261_960_720.jpg"
                alt="clinica"
              />

              <div>
                <strong>{data.name}</strong>
                <br />

                <TagService content="Piriri pororo" />
                <TagService content="Piriri pororo" />
                <TagService content="Piriri pororo" />
              </div>
              <FiArrowRight size={20} color="#000" />
            </Link>)
          })}
        </Clinics>
      </Container>
    </>
  );
};

export default Home;
