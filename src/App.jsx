import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Components/Button";
import FoodCard from "./Components/FoodCard";
import Food from "./Components/Food";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <>
      {/* <div className="relative w-full h-screen overflow-hidden">
        <motion.video
          autoPlay
          muted
          loop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-full h-full object-cover blur-xs"
          src="/src/assets/Bg_video.mp4"
        ></motion.video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative flex flex-col items-center justify-center h-screen text-white text-center px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl text-orange-500 font-bold mb-4"
          >
            Discover Delicious Recipes
          </motion.h1>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg mb-6"
          >
            Find the best recipes and cook your favorite meals effortlessly.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-amber-500 text-white font-semibold text-lg rounded-lg shadow-lg transition"
          >
            Explore Recipes
          </motion.button>
        </div>
      </div> */}
      {/* <Food /> */}
      <RecipeDetail />
    </>

  );
}

export default App;
