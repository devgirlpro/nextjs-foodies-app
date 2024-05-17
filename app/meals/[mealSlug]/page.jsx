import Link from 'next/link'
import React from 'react'

const mealDetailsPage = ({params}) => {
  return (
    <>
    <h1>meal Details Page</h1>
    <h2>params: {params.mealSlug}</h2>
    <Link href='/' >Home Pgae</Link>
    </>
    
  )
}

export default mealDetailsPage