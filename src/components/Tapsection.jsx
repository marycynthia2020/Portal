import React from "react";

const Tapsection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h1 className="text-4xl font-bold text-center text-black">Tap into the <br /> Hyperway of Web3</h1>
      <p className="text-gray-500 text-center mt-2 max-w-2xl">
        Say goodbye to fragmentation, Portal's tech stack and global network are
        the superhighway of Web3, allowing effortless movement of users,
        liquidity, and attention.
      </p>
      <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg flex items-center gap-2">
        Start Building <span className="text-lg">→</span>
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-5xl">
        {/* Left Card */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md relative">
          <h2 className="text-lg font-semibold">Hyperway, connecting Web3</h2>
          <img
            src="/path-to-your-image-1.png"
            alt="Hyperway Icons"
            className="w-full mt-4"
          />
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2">
            Learn More <span className="text-lg">→</span>
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md relative">
          <h2 className="text-lg font-semibold">$PORTAL is now on Solana</h2>
          <img
            src="/path-to-your-image-2.png"
            alt="Solana Connection"
            className="w-full mt-4"
          />
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2">
            Learn More <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tapsection;
