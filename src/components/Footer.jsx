import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <ul className="footer-links">
            <li><Link to="/about">Quiénes somos</Link></li>
            <li><a href="#privacidad">Política de Privacidad</a></li>
            <li><a href="#cookies">Política de Cookies</a></li>
        </ul>
      <ul className="footer-autores">
            <li><a span="#autores">Lidia Logroño Ramas</a></li>
            <li><a span="#autores">Alba Duro Cabrera</a></li>
            <li><a span="#autores">Marco Antonio Fernández Heras</a></li>
            <li><a span="#autores">Pablo Pérez-Aradros Calvo</a></li>
            <li><a span="#autores">Francisco José Saiz Ezquerra de Paz</a></li>
        </ul>
    </footer>
  );
}

export default Footer;
