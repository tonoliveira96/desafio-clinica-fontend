import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 18px;
`;

export const ClinicContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 4px;
  max-width: 800px;
  background-color: #fff;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  padding: 12px 24px;
`;

export const ClinicHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 256px;
    height: 256px;
    border-radius: 50%;
  }

  div {
    strong {
      color: #000;
      font-size: 24px;
    }

    p{
      font-size:18px;
      color:#3d3d4d;
    }
  }
`;
export const ClinicInfo = styled.div`
  display: flex;
  padding-top: 10px;
  text-align: justify;
  h2 {
    color: #000;
    font-size: 20px;
  }

  p {
    font-size: 16px;
    color: #3d3d4d;
  }
`;
