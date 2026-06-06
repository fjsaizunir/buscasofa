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
            <li><a span="autor1">Lidia Logroño Ramas</a></li>
            <li><a span="autor2">Alba Duro Cabrera</a></li>
            <li><a span="autor3">Marco Antonio Fernández Heras</a></li>
            <li><a span="autor4">Pablo Pérez-Aradros Calvo</a></li>
            <li><a span="autor5">Francisco José Saiz Ezquerra de Paz</a></li>
        </ul>
    </footer>
  );
}

export default Footer;