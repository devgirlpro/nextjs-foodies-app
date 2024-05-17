import sql from 'better-sqlite3';

const db = sql('meals.db');

//get all database melas
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare('SELECT * FROM meals').all();
}


//get only one meal on database 
export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
