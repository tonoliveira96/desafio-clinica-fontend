import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 18px;
`;
export const Clinics = styled.div`
  flex: 1;
  margin-top: 24px;
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
      margin-top: 16px;
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

      label {
        font-size: 18px;
        margin-top: 10px;
        margin-right: 8px;
        padding: 4px;
        border-radius: 25px;
        color: #3d3d4d;
        background-color: ${shade(-0.5,'#01a272')};
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
