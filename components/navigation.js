
"use client"; // Required 
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navigation.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page1">Page 1</Link>
        </li>
        <li>
          <Link href="/page2">Page 2</Link>
        </li>
      </ul>
    </nav>
  );
}