// ✅ Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          <button
            onClick={handleSubmit}
            className="relative top-[18vh] h-[6.5vh] text-white w-[13vw] bg-[#46779F] rounded-full cursor-pointer"
            style={{ fontFamily: "Abel, sans-serif" }}
          >
            SUBMIT
          </button>
          <button
            className="relative top-[20vh] h-[6.5vh] w-[13vw] border rounded-full cursor-pointer"
            style={{ fontFamily: "Abel, sans-serif" }}
          >
            CONTINUE WITH GOOGLE
          </button>
          <div className="span flex items-center relative top-[30vh] gap-[4px] text-[12px]">
            <span>New to Cup & Chronicle?</span>
            <span className="cursor-pointer" onClick={() => navigate("/register")}>Register</span>
          </div>
        </div>
        <div className="h-screen w-[60%] bg-blue-400 flex items-center justify-center">
          <img
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxs65vwbeg3bvxtq5beb34n4%2F1749970834_img_0.webp"
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
