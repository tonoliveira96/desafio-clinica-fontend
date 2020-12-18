import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
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
  width: 100%;
  flex-direction: row;

  img {
    display:flex;
    width: 256px;
    height: 256px;
    border-radius: 50%;
  }

  div {
    margin-left: 18px;
    padding-top: 18px;

    strong {
      color: #000;
      font-size: 24px;
    }

    p{
      font-size:18px;
      color:#3d3d4d;
    }

    span{
      font-size:18px;
      color: #000
    }

    a{
      display:flex;
      flex-direction: row;
      text-decoration: none;
      align-items:center;
      justify-content:center;
      max-width: 128px;
      color: #fff;
      border: 0;
      padding: 5px;
      margin-top: 12px;
      font-weight: bold;
      background: #25d366;
      border-radius: 4px;
      transition: background-color 0.2s;


      img{
        width: 24px;
        height: 24px;
        padding: 2px;
        margin-left: 6px;
      }

      &:hover{
        background: #128c7e;
      }
    }
  }

  @media(max-width: 580px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ClinicInfo = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
  flex-direction: column;

  h2 {
    color: #000;
    font-size: 20px;
  }

  p {
    font-size: 16px;
    color: #3d3d4d;
  }
`;
