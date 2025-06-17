import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "", bio: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, bio } = formData;
    if (!email || !password || !bio) {
      alert("Please fill in all fields");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      navigate("/landing");
    }, 2000);
    
  };
  return (
    <div>
      <div className="log h-screen w-full bg-red-500 flex">
        <div className="h-screen w-[40%] bg-[#ffffff] flex items-center flex-col">
          <h1 className="text-[55px] mt-[32px]" style={{ fontFamily: "Abel, sans-serif" }}>Grant Access.</h1>
          <p className="relative bottom-[10px] text-[12px]">Secure your world with every login</p>
          <span className="relative right-[6.1vw] top-[8vh]">Email</span>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-[5vh] w-[15vw] border-b-[1px] outline-0 relative top-[7vh]"
          />
          <span className="relative right-[5.1vw] top-[12vh]">Password</span>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="h-[5vh] w-[15vw] border-b-[1px] outline-0 relative top-[11vh]"
          />
          <span className="relative right-[6.7vw] top-[16vh]">Bio</span>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="h-[5vh] w-[15vw] border-b-[1px] outline-0 relative top-[15vh]"
          />

          <motion.button
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative top-[18vh] h-[6.5vh] text-white w-[13vw] bg-[#46779F] rounded-full cursor-pointer"
            style={{ fontFamily: "Abel, sans-serif" }}
          >
            SUBMIT
          </motion.button>

          {/* CONTINUE WITH GOOGLE BUTTON */}
          <motion.button
            onClick={() => navigate("/landing")}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: {
                border: "1px solid #ffffff",
                color: "#ffffff",
              },
              hover: {
                border: "1px solid #46779F",
                boxShadow: "0 0 14px rgba(70, 119, 159, 0.7)",
                transition: { duration: 0.4 },
              },
            }}
            className="relative top-[20vh] h-[6.5vh] w-[13vw] rounded-full cursor-pointer bg-transparent text-white"
            style={{ fontFamily: "Abel, sans-serif" }}
          >
            <motion.span
            className="text-black"
              variants={{
                rest: { y: 0 },
                hover: { y: -2 },
              }}
              transition={{ duration: 0.3 }}
            >
              CONTINUE WITH GOOGLE
            </motion.span>
          </motion.button>

          <div className="span flex items-center relative top-[30vh] gap-[4px] text-[12px]">
            <span>New to Cup & Chronicle?</span>
            <span className="cursor-pointer" onClick={() => navigate("/register")}>Register</span>
          </div>
        </div>

        <div className="h-screen w-[60%] bg-blue-400 flex items-center justify-center">
          <img
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxs65vwbeg3bvxtq5beb34n4%2F1749970834_img_1.webp?st=2025-06-16T11%3A46%3A11Z&se=2025-06-22T12%3A46%3A11Z&sks=b&skt=2025-06-16T11%3A46%3A11Z&ske=2025-06-22T12%3A46%3A11Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Vx0yx0uv%2FYcs9MPO%2F1kAMOly1CSz8cP8RIRxD5AutTQ%3D&az=oaivgprodscus"
            className="h-[37vw]"
            alt=""
          />
        </div>

        {success && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-md animate-bounce">
            ✅ Login Successful!
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
