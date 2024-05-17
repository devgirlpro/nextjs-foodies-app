import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default function mealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug)

  if(!meal) {
    notFound()
  }


meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  console.log("meal ==>", meal)

  return (
    <>
      <headr className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
      
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </headr>

      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
      <Link href="/">Home Pgae</Link>
    </>
  );
}
