'use client';
import Link from 'next/link';
import styles from '../styles/header.module.css';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.brand}>Artistly</div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/artists">Artists</Link>
          <Link href="/onboard">Onboard</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
