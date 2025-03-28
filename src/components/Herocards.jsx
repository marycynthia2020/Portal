import React from 'react'

const Herocards = () => {
  return (
    <div>
            {/* cards  */}


      <div className="mt-4 flex justify-center gap-3">
        <div className="bg-gray-100 hover:bg-gray-200 w-96 h-24 p-2 rounded-2xl">
            
            <div className="ml-3 mt-3 grid-cols-1 justify-between">
            <p className="text-gray-400 font-mono">DISTRIBUTIION</p>
             <div className="mt-5">
             <img src="" alt="" />
             <p className="text-2xl font-bold">Wallet</p>
             </div>
            </div>
        
        </div>

        <div className="bg-gray-100 hover:bg-gray-200 w-96 h-24 p-2 rounded-2xl">
            
            <div className="ml-3 mt-3 grid-cols-1 justify-between">
            <p className="text-gray-400 font-mono">DISTRIBUTIION</p>
             <div className="mt-5">
             <img src="" alt="" />
             <p className="text-2xl font-bold">Hub</p>
             </div>
            </div>
        
        </div>

        <div className="bg-gray-100 hover:bg-gray-200 w-96 h-24 p-2 rounded-2xl">
            
            <div className="ml-3 mt-3 grid-cols-1 justify-between">
            <p className="text-gray-400 font-mono">LIQUIDITY</p>
             <div className="mt-5">
             <img src="" alt="" />
             <p className="text-2xl font-bold">Pay</p>
             </div>
            </div>
        
        </div>

        <div className="bg-gray-100 hover:bg-gray-200 w-96 h-24 p-2 rounded-2xl">
            
            <div className="ml-3 mt-3 grid-cols-1 justify-between">
            <p className="text-gray-400 font-mono">TOKEN</p>
             <div className="mt-5">
             <img src="" alt="" />
             <p className="text-2xl font-bold">$PORTAL</p>
             </div>
            </div>
        
        </div>

        
      </div>
    </div>
  )
}

export default Herocards