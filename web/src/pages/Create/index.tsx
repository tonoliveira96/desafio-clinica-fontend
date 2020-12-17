import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';

import { Container, ConainerForm } from './styles';

const Create: React.FC = () => {
  return (
    <>
      <Header title="Nova Clínica"hiddeButtonBack={false} showButton={false}>
        <FiArrowLeft size={32} />
      </Header>
      <Container>
        <ConainerForm>
          <h1>Formulário de Cadastro</h1>
          <form action="">
            <div className="content-input">
              <label htmlFor="">Nome:</label>
              <input type="text" />
            </div>
            <div className="content-input">
              <label htmlFor="">E-mail:</label>
              <input type="text" />
            </div>
            <div className="content-input">
              <label htmlFor="">Telefone:</label>
              <input type="text" />
            </div>
            <div className="content-input">
              <label htmlFor="" className="cep">
                CEP:
              </label>
              <input type="text" />
            </div>
            <div className="content-input">
              <label htmlFor="" className="cep">
                Serviços:
              </label>
              <input type="text" />
            </div>
            <div className="content-input">
              <label htmlFor="" className="cep">
                Sobre:
              </label>
              <input type="textarea" />
            </div>
          </form>
        </ConainerForm>
      </Container>
    </>
  );
};

export default Create;
