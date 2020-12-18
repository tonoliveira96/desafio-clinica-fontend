import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowDown, FiArrowRight, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import * as _ from 'underscore';

import Header from '../../components/Header';
import TagService from '../../components/TagService';

import api from '../../services/api';

import { Container, Clinics, ContainerFilter } from './styles';

interface IClinicsProps {
  id: number;
  name: string;
  services: string;
}

const Home: React.FC = () => {
  const [clinics, setClinics] = useState<IClinicsProps[]>([]);

  useEffect(() => {
    api.get('clinic').then((response) => {
      setClinics(response.data);
      console.log(response.data);
    });
  }, [setClinics]);

  const handleOrder = useCallback((arg) => {

    if(arg ==='AZ'){
      let orderArray = _.sortBy(clinics, 'name');
      console.log(orderArray);
      setClinics(orderArray);
    }else{
      let orderArray = _.sortBy(clinics, 'name').reverse();
      console.log(orderArray);
      setClinics(orderArray);
    }

  }, [clinics]);

  return (
    <>
      <Header title="Clínicas" hiddeButtonBack showButton />
      <Container>
        <Clinics>
          <ContainerFilter>
            <label htmlFor="Ordernar">Ordenar:</label>
            <button onClick={()=>handleOrder('AZ')}>
              <FiArrowUp size={20} />
              A-Z
            </button>
            <button onClick={()=>handleOrder('ZA')}>
              <FiArrowDown size={20} />
              Z-A
            </button>
          </ContainerFilter>

          {clinics.map((data) => {
            return (
              <Link key={data.id} to={`details/${data.id}`}>
                <img
                  src="https://cdn.pixabay.com/photo/2017/02/01/13/52/analysis-2030261_960_720.jpg"
                  alt="clinica"
                />

                <div>
                  <strong>{data.name}</strong>
                  <br />
                  <TagService content={data.services} />
                </div>
                <FiArrowRight size={20} color="#000" />
              </Link>
            );
          })}
        </Clinics>
      </Container>
    </>
  );
};

export default Home;
