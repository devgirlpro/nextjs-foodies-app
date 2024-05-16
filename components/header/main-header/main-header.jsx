'use client'
import Link from 'next/link';
import React from 'react';
import MainHeaderBackground from '../main-header-background/main-header-background';
import logo from '@/assets/logo.png';
import styles from './main-header.module.css';
import Image from 'next/image'
import { usePathname } from 'next/navigation';


const MainHeader = () => {
    const path = usePathname();
  return (
    <>
    <MainHeaderBackground />
    <header className={styles.header} >
        <Link  href='/' className={styles.logo}>
            <Image src={logo} alt="A plate with food on it" priority />
            NextLevel Food
        </Link>

        <nav className={styles.nav} >
            <ul>
                <li>
                    <Link href='/meals' className={path.startsWith('/meals') ? styles.active : undefined} >Browse Meal</Link>
                </li>
                <li>
                    <Link href='/community' className={path.startsWith('/community') ? styles.active : undefined} >Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default MainHeader