import { RxCross2 } from "react-icons/rx";
import React from 'react'
import { useNavigate } from 'react-router-dom'

const bar = () => {
const navigate = useNavigate();
const goToMenuAgain = () => {
    navigate("/landing");
  }

  return (

    <div className='h-screen w-full bg-black flex flex-col items-center justify-center'>
      <RxCross2 onClick={goToMenuAgain} className="text-white relative left-[47vw] bottom-[10vh] text-[4vh] cursor-pointer" />
<span
  style={{ fontFamily: "'Instrument Serif', serif" }}
  className="text-[6vw] text-white relative cursor-pointer group"
>
  Featured/
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
</span>

<span
  style={{ fontFamily: "'Instrument Serif', serif" }}
  className="text-[6vw] text-white relative cursor-pointer group"
>
  Gallery/
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
</span>

<span
  style={{ fontFamily: "'Instrument Serif', serif" }}
  className="text-[6vw] text-white relative cursor-pointer group"
>
  About/
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
</span>

<span
  style={{ fontFamily: "'Instrument Serif', serif" }}
  className="text-[6vw] text-white relative cursor-pointer group"
>
  FAQ/
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
</span>

    </div>
  )
}

export default bar