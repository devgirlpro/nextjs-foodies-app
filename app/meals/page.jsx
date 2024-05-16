import Link from 'next/link'
import React from 'react'

const MealPage = () => {
  return (
    <div>
      <h1>Meal Page</h1>
      <Link href='/meals/meal-1'>meal 1</Link>
      <Link href='/meals/meal-2'>meal 2</Link>
    </div>
  )
}

export default MealPage