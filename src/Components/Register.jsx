import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullname: "", username: "", email: "", password: "", terms: false });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, username, email, password, terms } = formData;
    if (!fullname || !username || !email || !password || !terms) {
      alert("Please fill all fields and agree to terms.");
      return;
    }
    setSuccess(true);
  };

const goToLogin = () => {
    navigate("/login");
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#021529] relative text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#021529] w-[550px] h-[650px] flex flex-col gap-5 px-10 py-12 rounded-xl shadow-2xl border border-green-400"
      >
        <h2 className="text-3xl font-semibold border-b border-green-500 pb-2 mb-4 w-fit">Just Introduce Yourself</h2>
        <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} className="border-b bg-transparent outline-none py-3 text-[15px] placeholder:text-gray-400" />
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="border-b bg-transparent outline-none py-3 text-[15px] placeholder:text-gray-400" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border-b bg-transparent outline-none py-3 text-[15px] placeholder:text-gray-400" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="border-b bg-transparent outline-none py-3 text-[15px] placeholder:text-gray-400" />
        <label className="text-[13px] flex items-center gap-2 mt-1">
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} className="accent-green-500" />
          I agree to the Terms and Conditions.
        </label>
        <button type="submit" className="mt-2 bg-lime-500 py-3 text-base text-black rounded-lg hover:bg-lime-400 transition">Register</button>
        <p className="text-sm mt-3 text-right">Already have an account? <span className="text-blue-300 underline cursor-pointer" onClick={goToLogin}>Log In</span></p>
      </form>
      {success && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-md animate-bounce">
          ✅ Registration Successful!
        </div>
      )}
    </div>
  );
};

export default Register;
