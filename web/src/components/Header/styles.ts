import styled from 'styled-components';

interface HeaderProps {
  hiddeButtonBack: boolean;

}

interface LinkProps{
  showButton: boolean;
}

export const Container = styled.div`
  display: flex;
  background-color: #01a272;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
`;

export const ContainerTitle = styled.div<HeaderProps>`
  display: flex;

  svg {
    padding-top: 5px;
    display: ${(props) => (props.hiddeButtonBack === true ? 'none' : '')};
  }
  h1 {
    font-weight: bold;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerRoute = styled.div<LinkProps>`
  padding: 0 10px;

  a {
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    display: ${(props) => (props.showButton === false ? 'none' : '')};
  }
`;
