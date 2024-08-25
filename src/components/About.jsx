import React from "react";
import about from "../assets/about.png";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="w-full h-[90vh] flex justify-center items-center mt-24 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">
        <div className="flex-1">
          <img
            src={about}
            alt="About Us"
            className="rounded-[30px] mt-5 w-full md:w-[600px] lg:w-[800px] h-auto object-cover"
          />
        </div>
        <div className="flex-1 p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">ABOUT US</h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab iste
            nihil maiores quidem culpa, ducimus sunt vitae inventore eum illo
            consectetur quibusdam reprehenderit vero laborum quos perferendis
            accusamus alias harum quis. Laboriosam accusantium reprehenderit
            voluptatum ex enim fugiat assumenda error laborum sunt commodi unde
            voluptas, sed similique amet culpa alias veniam necessitatibus
            blanditiis pariatur dolores! Ducimus officiis placeat, eum, laudantium
            quae animi nam expedita rerum eveniet architecto enim et accusamus.
            Itaque sint provident voluptatem fugiat suscipit. Quam facere
            voluptatibus, natus nostrum eaque eum incidunt in veritatis dolores
            recusandae! Assumenda, animi.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
