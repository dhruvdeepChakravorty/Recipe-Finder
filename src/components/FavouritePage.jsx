import React from 'react'
import Error from '../photo/404.svg'
import RecipeCard from './RecipeCard'
import { getRandomColor } from '../Utility/Utils';
const FavouritePage = () => {
  const fav=JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <div className='bg-[#faf9fb] p-10 flex-1 min-h-screen'>
      <div className='max-w-screen-lg mx-auto '>
        <p className='text-3xl font-bold md:text-5xl my-4'> My Favourites</p>
      </div> 
      {fav.length===0 && (
        <div className='h-[80vh] flex flex-col items-center gap-4'>
         <img src={Error} className='h-3/4' alt="404 Error" />
        </div>
      )} 
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
         {fav.map((recipe)=>(
          <RecipeCard key={recipe.id} recipe={recipe} {...getRandomColor()}></RecipeCard>
         ))}
        </div>
     
    </div>
  )
}

export default FavouritePage
