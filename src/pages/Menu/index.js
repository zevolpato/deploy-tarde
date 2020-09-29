import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Menu() {
  return (
      <>
      <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/main">Main</Link></li>
              <li>Quem somos</li>
              <li>Ajuda</li>
          </ul>
      </nav>
      </>
    );
}
