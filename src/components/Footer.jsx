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
    </footer>
  );
}

export default Footer;