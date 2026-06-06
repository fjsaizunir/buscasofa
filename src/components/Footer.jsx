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
        <ul className="footer-autores" style={{ listStyleType: 'none', textAlign: 'right' }}>
            <li>Lidia Logroño Ramas</li>
            <li>Alba Duro Cabrera</li>
            <li>Marco Antonio Fernández Heras</li>
            <li>Pablo Pérez-Aradros Calvo</li>
            <li>Francisco José Saiz Ezquerra de Paz</li>
         </ul>
    </footer>
  );
}

export default Footer;
