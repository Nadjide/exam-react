import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './PageTemplate.module.css';

const PageTemplate: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Exam Typescript React</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>
          <i>Par Nadjide</i> le <time dateTime="2023-11-10">25/11/2024</time>
        </p>
      </footer>
    </>
  );
};

export default PageTemplate;