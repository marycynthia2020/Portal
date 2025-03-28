import React from "react";
import Blackbutton from "../components/ui/Blackbutton";
import FBPartnersCard from "../components/cards/FBPartnersCard";
import ExplorerCard from "../components/cards/ExplorerCards";

const Joinsection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Join the Global Movement
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
          Top builders around the world have joined our mission to create the
          Web3 superhighway. From major blockchains to titans of mainstream
          entertainment, our partner network spans the best of Web3 and beyond.
        </p>
        <div className="flex justify-center">
          <Blackbutton />
        </div>
      </div>
      <FBPartnersCard />
      <ExplorerCard />
    </section>
  );
};

export default Joinsection;
