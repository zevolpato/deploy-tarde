import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptop } from 'react-icons/fa';

import './styles.css';

export default function Menu() {
  return (
      <>
      <section>
          <span><FaLaptop size={150} color="#e02041" /></span>
          
          <span className="style-span-ul">
          <ul>
              <li><Link to="/" className="style-link">Home</Link></li>
              <li><Link to="/main" className="style-link">Main</Link></li>
              <li><Link to="/quemsomos" className="style-link">Quem somos...</Link></li>
              <li><Link to="/ajuda" className="style-link">Ajuda</Link></li>
          </ul>
          
          <form>
          <input placeholder="Login"/>
          <button className="style-button" type="button">Entrar</button>  
          </form>
          </span>
      </section>
     
   
      </>
    );
}
