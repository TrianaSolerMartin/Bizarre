import React from 'react';
import styled from 'styled-components';
import BizzarLogo from "../assets/img/BizzarLogo.png"
import Instagram from "../assets/img/Instagram.png";
import Twitter from '../assets/img/TwitterX.png';

// Cambiado "Footer" por "footer" para coincidir con el nombre de la etiqueta HTML
const FooterContainer = styled.footer`
  background-color: #393939;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 10vh;
  
  img {
    width: auto;
    height: auto;
    max-width: 30px;
    transition: 0.5s;
  }

  img:hover {
    transform: scale(1.3);
    color: black;
  }

  img:active {
    transform: scale(0.9);
  }

  img:focus {
    color: black;
  }

  .footer-container {
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    
  }

`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-container">
        <a href="../assets/img/bizarLogo.png">
          <img src={BizzarLogo} alt="BizzarLogo" />
        </a>
        <p>Políticas de privacidad</p>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
      </div>
    </FooterContainer>
  );
}

export default Footer;