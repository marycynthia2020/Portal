import Whitebutton from "./ui/Whitebutton";
import Blackbutton from "./ui/Blackbutton";
import racyscreen from "../assets/images/racyscreen.png";
import racysreenshot from "../assets/images/racyscreenshot.png";

const Buildsection = () => {
  return (
    <div className="mx-auto p-10 max-w-6xl border-b border-gray-400 pb-10">
      <div className="text-center">
        <small className="text-gray-500 text-lg">The Portal Stack</small>
        <h1 className="text-black text-6xl mt-6 font-bold leading-snug">
          Build on the infrastructure <br /> uniting Web3
        </h1>
        <p className="text-gray-500 text-sm mt-4">
          Build on Portal to harness the power of the Hyperway: our universal
          network <br />
          supercharging your distribution.
        </p>
        <div className="mt-6 ml-[450px]">
          <Blackbutton />
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center mt-10">
        <div className="w-[500px] h-[600px] bg-[#b78dfa] p-8 rounded-xl text-white">
          <h2 className="text-xl font-bold mb-4">
            Discover the best Web3 content
          </h2>
          <img
            src={racyscreen}
            alt="Web3 content preview"
            className="rounded-lg  w-full"
          />
          <div className="mt-4">
            <Whitebutton />
          </div>
        </div>

        <div className="w-[500px] h-[600px] bg-gray-100 shadow-lg  rounded-xl">
          <h2 className="text-xl font-bold p-8 mb-4">
            Access liquidity on every chain
          </h2>
          <img
            src={racysreenshot}
            alt="Liquidity preview"
            className="rounded-lg mt-[150px]  w-full"
          />
          <div className="mt-[150px] px-8 ">
            <Whitebutton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buildsection;
