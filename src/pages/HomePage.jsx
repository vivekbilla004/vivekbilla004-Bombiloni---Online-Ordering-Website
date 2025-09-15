import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center w-full max-w-xl">
          <div className="flex flex-row gap-4 items-center justify-center mb-6">
            <img src="./images/bombiloni logo.jpg" alt="" className="h-20 w-20 rounded-xl "/>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
           BOMBILONI
          </h1></div>
          <p className="text-lg md:text-xl text-black mb-6">
            Discover the best recipes and enjoy amazing deals on Bombiloni!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* <button className="px-6 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition duration-300 shadow">
              Share Your Recipe
            </button> */}
            <Link
              to="/menu"
              className="px-6 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition duration-300 shadow"
            >
              <button className="px-6 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition duration-300 shadow">
                Explore Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
