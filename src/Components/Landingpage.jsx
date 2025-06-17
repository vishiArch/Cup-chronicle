import React from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Landingpage = () => {

    const navigate = useNavigate();

const goToMenu = () => {
    navigate("/menu");
}
  return (
    <div>
      <motion.div className="h-screen w-full bg-black">
        {/* Navbar */}
        <div className="h-[7vh] w-full flex items-center justify-between px-4">
          <h1 className="text-[16px] text-white cursor-pointer">Cup & Chronicle</h1>
          <IoMenuOutline onClick={goToMenu} className="text-[30px] text-white cursor-pointer" />
        </div>

        {/* Main Section */}
        <div className="h-[93vh] w-full flex flex-col items-center justify-center gap-[10px]">
          <h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="relative top-[5vh] text-[90px] text-center leading-[90px] text-white"
          >
            Minimal. Meaningful.
            <br />
            Masterfully Brewed Moments.
          </h1>

          <motion.button
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1, boxShadow: "0px 0px 0px rgba(255,255,255,0)" },
        hover: { 
          scale: 1.08,
          boxShadow: "0px 0px 18px rgba(255,255,255,0.6)", 
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
          },
        },
      }}
      className="group border border-white hover:border-transparent bg-transparent hover:bg-white hover:text-black cursor-pointer relative top-[5vh] h-[7vh] w-[12.7vw] rounded-full text-white overflow-hidden transition-colors duration-300"
    >
      {/* Animated Text Inside */}
      <motion.span
        variants={{
          rest: { opacity: 1 },
          hover: {opacity: 0.8 },
        }}
        transition={{ duration: 0.3 }}
        className="block"
      >
        Explore
      </motion.span>
    </motion.button>

          {/* Taglines */}
          <span className="absolute text-white text-[13px] top-[75vh] left-[1.6vw]">
            Crafted Flavors. Timeless Storytelling.
          </span>

          <span className="absolute text-white text-[13px] top-[78vh] left-[3.6vw]">
            Empowering daily routines with elegance,
            <br />
            creativity, and personalized design. Elevate
            <br />
            everyday momenth timeless design,
            <br />
            crafted mugs,
          </span>

          {/* Product Image */}
          <img
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxvk4wp6fphvqzfwvh55e210%2F1750051579_img_1.webp?st=2025-06-16T05%3A22%3A01Z&se=2025-06-22T06%3A22%3A01Z&sks=b&skt=2025-06-16T05%3A22%3A01Z&ske=2025-06-22T06%3A22%3A01Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=8HaMKDPZGCMYW0fY0wcaeN3dJDR4Kpm8zqqbYzoVBm0%3D&az=oaivgprodscus"
            alt="Product"
            className="h-[30vh] w-[22vw] object-cover relative left-[35vw] top-[10vh] cursor-pointer"
          />
        </div>
      </motion.div>
      {/* Featured Products */}
    </div>
  );
};

export default Landingpage;
