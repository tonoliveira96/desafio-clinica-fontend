import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 18px;
`;

export const ContainerFilter = styled.div `
  background: #fff;
  border-radius: 5px;
  font-size: 18px;
  padding: 4px 2px;
  margin-bottom:4px;

  label{
    color: #3d3d4d;
  }

  button{
    border-radius: 5px;
    padding: 2px;
    margin-left: 10px;
  }
`

export const Clinics = styled.div`
  flex: 1;
  margin: 4px 0;
  max-width: 800px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 18px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 12px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

    }
    svg {
      margin-left: auto;
      color: #cdcdd6;
      transition: color 0.2s;
    }
    &hover {
      color: ${shade(0.8, '#cdcdd6')};
    }
  }
`;
