import React from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {

    const navigate = useNavigate();

const goToMenu = () => {
    navigate("/menu");
}
  return (
    <div>
      <div className="h-screen w-full bg-black">
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

          <button className="border border-white hover:border-transparent hover:bg-white hover:text-black cursor-pointer relative top-[5vh] h-[7vh] w-[12.7vw] rounded-full text-white transition-all duration-300">
            Explore
          </button>

          {/* Taglines */}
          <span className="absolute text-white text-[13px] top-[75vh] left-[1.6vw]">
            Crafted Flavors. Timeless Storytelling.
          </span>

          <span className="absolute text-white text-[13px] top-[78vh] left-[3.6vw]">
            Empowering daily routines with elegance,
            <br />
            creativity, and personalized design. Elevate
            <br />
            everyday moments with timeless design,
            <br />
            crafted mugs, elegant diaries, and a touch of style.
          </span>

          {/* Product Image */}
          <img
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxvk4wp6fphvqzfwvh55e210%2F1750051579_img_1.webp?st=2025-06-16T05%3A22%3A01Z&se=2025-06-22T06%3A22%3A01Z&sks=b&skt=2025-06-16T05%3A22%3A01Z&ske=2025-06-22T06%3A22%3A01Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=8HaMKDPZGCMYW0fY0wcaeN3dJDR4Kpm8zqqbYzoVBm0%3D&az=oaivgprodscus"
            alt="Product"
            className="h-[30vh] w-[22vw] object-cover relative left-[35vw] top-[10vh] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
