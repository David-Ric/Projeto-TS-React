import React from 'react';

import styles from './Header.module.css';
//  from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
     <h1>Agenda de Tarefas</h1>
    </header>
  )
};

export default Header;