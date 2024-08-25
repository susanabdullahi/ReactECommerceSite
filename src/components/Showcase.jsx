import React from "react";
import banner from  "../assets/banner.jpg";

const Showcase = () => {
  return (
    <div>
      <div className="home w-full h-[90vh] flex justify-center flex-wrap items-start font-[Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif] mt-[140px] home sm:justify-center sm:items-center ">
        {/*Left*/}

        <div className="left w-2/5 ml-[40px] text-left">
          <h1 className="flex justify-center items-center text-[40px] h-[60px] font-normal text-[#3b3b3b] py-[30px] my-[20px]">if this phone is not useful we will return your money back</h1>
          <p className="py-[30px] text-[20px] font-light text-[#706b6b]"> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
            nesciunt quam velit aperiam eos nulla dolores nemo? Expedita officia
            quis eum commodi minus atque dolor non dolorem cum, praesentium
            ipsa?
          </p>

          <a href="a">
            <button className="text-white border-none rounded-md cursor-pointer flex justify-center bg-[#121619] h-[50px] w-[180px] text-[20px] hover:bg-[#07090a] transition ease-in duration-300">  go to cart</button>
          </a>
        </div>
         {/*right*/}
         <div className="right w-2/5 pl-[150px] mt-[-60px]">
          <img className="w-[105%] h-[75%]" src={banner} alt="" />
         </div>
      </div>
    </div>
  );
};

export default Showcase;
