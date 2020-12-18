import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 18px;
`;

export const ConainerForm = styled.div`
  display: flex;
  flex: 1;
  margin-top: 4px;
  max-width: 800px;
  background-color: #fff;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  padding: 12px 24px;

  h1 {
    font-weight: bold;
    color: #3d3d4d;
  }

  form {
    display: flex;
    width: 100%;
    flex-direction: column;

    div.content-input {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      label {
        color: #3d3d4d;
        margin-right: 12px;
        line-height: 24px;
      }

      input {
        max-width: 620px;
        background: #f5f8fa;
        border: 1px solid #d3e2e5;
        border-radius: 20px;
        outline: none;
        color: #5c8599;
        height: 64px;
        padding: 0 16px;
        margin-left: 10px;
      }
    }

    button {
      margin-top: 12px;
      width: 100%;
      height: 64px;
      border: 0;
      cursor: pointer;
      background: #3cdc8c;
      border-radius: 20px;
      color: #ffffff;
      font-weight: 800;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background-color 0.2s;

      &:hover{
        background-color: ${shade(0.3, '#3cdc8c')}
      }
    }
  }
`;
