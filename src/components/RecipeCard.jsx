import React from "react";

const RecipeCard = ({ name, price, image }) => {
  const phoneNumber = "918390622444";
  const message = `Hi, I would like to order:\n${name} - ₹${price}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  // Replace 91XXXXXXXXXX with your real number

  return (
    <div className="bg-blue-950 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 w-full max-w-md">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover p-2"
      />
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-lg text-pink-600 font-semibold mb-4">₹{price}</p>
          <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 p-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-semibold text-center transition duration-300"
        >
          Order Now
        </a>
        </div>
        
      </div>
    </div>
  );
};

export default RecipeCard;

