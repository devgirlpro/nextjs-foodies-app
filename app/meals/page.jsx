import MealsGrid from '@/components/meals/meals-grid';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

const MealPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicius meals, creatd{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recepe and cook it yourself, it is easy & fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite Recipe</Link>
        </p>
      </header>

      <main className={styles.main}>
        <MealsGrid meals={[]}/>
      </main>
    </>
  );
};

export default MealPage;
