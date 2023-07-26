import React from "react";
import Cards from "./Cards";
import{Link} from "react-router-dom"

const Hero = () => {
  return (
    <div>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">
            Welcome to E-Commerce shop
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            @Rudra Shop
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Fast, flexible & Easy
            </p>
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            optio labore animi tempora minima assumenda nam necessitatibus odit
            exercitationem at quia, quod officiis suscipit, distinctio nihil. Ut
            officiis omnis id, nobis deserunt iusto.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
           <Link to="/products">Get Started</Link> 
          </button>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Hero;
