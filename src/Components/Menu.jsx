import { RxCross2 } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

const bar = () => {

const navigate = useNavigate();
const goToMenuAgain = () => {
    navigate("/landing");
  }
const logout = () => {
  navigate("/login");
}
  return (
<>
<div className="bg-black h-screen w-full overflow-hidden">
   <motion.div className='h-screen w-full bg-black flex flex-col items-center justify-center'>

 <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      className="cursor-pointer h-[5.2vh] w-[7vw] gap-[8px] relative border border-white bottom-[5.7vh] right-[44vw] flex items-center"
    >
      <motion.span className="text-white text-[2.2vh] ml-2">Logout</motion.span>
      <CiLogout onClick={logout} className="text-white text-[4vh]" />
    </motion.div>

      <motion.div initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      >
        <RxCross2 onClick={goToMenuAgain}  className="text-white relative left-[47vw] bottom-[11vh] text-[4vh] cursor-pointer" />
      </motion.div>
<motion.span
 initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  style={{ fontFamily: "'Instrument Serif', serif" }}
  className="text-[6vw] text-white relative cursor-pointer group"
>
  Featured/
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
</motion.span>

<motion.span
initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{duration: 0.6}}
  style={{ fontFamily: "'Instrument Serif', serif" }}
  className="text-[6vw] text-white relative cursor-pointer group"
>
  Gallery/
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
</motion.span>

<motion.span
initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{duration: 1}}
  style={{ fontFamily: "'Instrument Serif', serif" }}
  className="text-[6vw] text-white relative cursor-pointer group"
>
  About/
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
</motion.span>

<motion.span
initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{duration: 1.5}}
  style={{ fontFamily: "'Instrument Serif', serif" }}
  className="text-[6vw] text-white relative cursor-pointer group"
>
  FAQ/
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
</motion.span>

    </motion.div>
</div>
</>
  
  )
}

export default bar