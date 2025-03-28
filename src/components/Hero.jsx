import React from "react";
import Navbar from "./layout/Navbar";
import Herocards from "./Herocards";
import Blackbutton from "./ui/Blackbutton";

const Hero = () => {
  return (
    <div>

                <Navbar/>
      {/* main  */}

            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-pink-200 mt-4 ml-4 mr-4 flex-col rounded-3xl h-[850px] flex justify-center items-center ">

                <div>
                    <h2 className="text-6xl font-black leading-10"><b>A New Era of Portal</b></h2>
                </div>
                <div className="mt-16">
                    <Blackbutton text="Discover"/>
                </div>

            </div>


            {/* cards  */}
                   <Herocards/>

  

      <hr />
    </div>
  );
};

export default Hero;