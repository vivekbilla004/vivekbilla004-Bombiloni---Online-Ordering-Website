import React from "react";

const RecipeCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-pink-600 font-semibold mb-3">₹{price}</p>
        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md font-bold transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
