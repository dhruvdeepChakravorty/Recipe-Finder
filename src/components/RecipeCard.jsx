import React, { useEffect, useState } from "react";
import { TbSoup } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";

const RecipeCard = React.memo(({ recipe, bg, badge }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isRecipeInFavorites = favorites.some((fav) => fav.id === recipe.id);
    setIsFavorite(isRecipeInFavorites);
  }, [recipe.id]);

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isRecipeAlreadyInFavorites = favorites.some(
      (fav) => fav.id === recipe.id
    );

    if (isRecipeAlreadyInFavorites) {
      favorites = favorites.filter((fav) => fav.id !== recipe.id);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.title} recipe`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-32"
      >
        <div className="skeleton absolute inset-0" />
        <img
          src={recipe.image}
          alt="Img Not Found"
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500 "
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full flex items-center gap-1 p-1 text-sm">
          <TbSoup size={"16"} />
          {recipe.servings} servings
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavorites();
          }}
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500 fill-red-500" />
          ) : (
            <FaHeart className="transition-all duration-150 hover:text-red-500 hover:fill-red-500" />
          )}
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.title}</p>
      </div>
      <p className="my-2">{recipe.readyInMinutes} Minutes</p>
      <div className="flex gap-2 mt-auto">
        <div
          className={`flex flex-col rounded-md ${badge} overflow-hidden p-3 relative`}
        >
          <span className="text-sm tracking-tighter font-semibold">
            {recipe.dishTypes[0]}
          </span>
        </div>
        {recipe.dishTypes[1] && (
          <div
            className={`flex flex-col rounded-md ${badge} overflow-hidden p-3 relative`}
          >
            <span className="text-sm tracking-tighter font-semibold">
              {recipe.dishTypes[1]}
            </span>
          </div>
        )}
      </div>
    </div>
  );
});

export default RecipeCard;
