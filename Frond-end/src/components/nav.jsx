import React from 'react';
import styled from 'styled-components';
import Sellbutton from './sellbutton';

// Eliminé la declaración de estilo 'body' ya que no se puede usar en este contexto

const StyledNav = styled.nav`
  height: 10vh;
  width: auto;
  color: white;
  font-family: 'Jost', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`


const Title = styled.h1`
  margin-left: 1vw;
  font-size: 200%;
  letter-spacing: 0.1em;
  transition: 0.5s;
  &:hover {
    color: #3DE361;
    transition: 0.5s;
    transform: scale(1.1);
  }
  
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyleLink to="/">
        <Title>Bizzar bazar</Title>
        </StyleLink>
      <Sellbutton />
    </StyledNav>
  );
}

export default Nav;

