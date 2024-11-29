import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import RecipeCard from "./RecipeCard";
import { getRandomColor } from "../Utility/Utils";

const Home = () => {
  const [recipes, setRecipes] = useState([]); // Changed from 'recipe' to 'recipes' for clarity
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&addRecipeInformation=true&apiKey=23eed1a56b494185b5de1bee2e3d6327
`
      );
      const result = await response.json();
      setRecipes(result.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);


    }
  };

  useEffect(() => {
    fetchRecipes("Pizza");
  }, []);
  const handleSubmit=(e)=>{
   e.preventDefault();
   fetchRecipes(e.target[0].value);
  }
  return (
    <div className="bg-[#faf9fb] p-10 flex-1 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <label className="input shadow-md flex items-center gap-2">
            <FaSearch size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="Search Recipe"
            />
          </label>
        </form>
        <p className="font-bold text-3xl md:text-5xl mt-4">Recommended Recipe</p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular Recipe</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {!loading &&
            recipes.map((recipe) => (
              <RecipeCard key={recipes.id} recipe={recipe} {...getRandomColor()} />
            ))}
          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;