import React from "react";
import recipes from "../MockData/recipes";
import RecipeCard from "../components/RecipeCard";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
        Our Bombiloni Menu
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {recipes.map((item) => (
          <RecipeCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
