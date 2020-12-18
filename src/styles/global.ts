import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #e5e5e5;
    color: #fff;
    -webkit-font-smoothing: antialiased;

    input{
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
      height: 32px;
      padding: 0 11px;
    }
  }

  body, input , button {
    font: 16px 'Roboto Slab', serif;
    font-size: 16px;

    h1,h2,h3,h4,h5,h6 strong{
      font-weight:500;
    }

  }


  button{
    cursor: pointer;
  }

`
