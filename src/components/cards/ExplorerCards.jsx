
import React from "react";
import { ExplorerCardItem } from "./ExploreCard";

const ExplorerCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
      <ExplorerCardItem backgroundColor="bg-[#B388FF]" title="The Interoperable Hyperway">
        <div className="mx-auto flex flex-col items-center justify-center p-4 rounded-lg space-y-3">
          <img src="/src/assets/images/chart.png" alt="Logo" />
        </div>
      </ExplorerCardItem>

      <ExplorerCardItem backgroundColor="bg-[#FF7F6B]" title="Explore the best of Web3">
        <img
          src="/src/assets/images/slider-static.png"
          alt="Citizen Conflict"
          className="w-full object-cover my-8"
        />
      </ExplorerCardItem>

      <ExplorerCardItem 
        backgroundColor="bg-[#B4D4E7]" 
        title="Distribution to millions of esports superfans"
      >
        <div className="relative">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/src/assets/images/game-screenshot.png"
              alt="Game Screenshot"
              className="w-full object-cover"
            />
          </div>
        </div>
      </ExplorerCardItem>

      <ExplorerCardItem 
        backgroundColor="bg-[#F6F6F6]" 
        title="Seamless wallet for billions of users"
        textColor="black"
      >
        <div className="mx-auto flex flex-col items-center justify-center p-4 rounded-lg space-y-3">
          <div className="flex gap-2 items-center">
            <img
              src="/src/assets/images/signup.svg"
              alt="Avatar"
              style={{ width: '230px' }}
              className="object-fill"
            />
            <img
              src="/src/assets/images/success.svg"
              alt="success"
              style={{ width: '125px', height: 'auto'}}
              className="object-fill"
            />
          </div>
          <img
            src="/src/assets/images/superTege.svg"
            alt="SuperTege"
            style={{ width: '360px' }}
          />
        </div>
      </ExplorerCardItem>
    </div>
  );
};

export default ExplorerCard;