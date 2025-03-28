import React from 'react'
import hub from '../assets/images/hub.svg'
import wallet from '../assets/images/wallet.svg'
import pay from '../assets/images/pay.svg'
import porta from '../assets/images/porta.svg'


const Herocards = () => {
  return (
    <div>
            {/* cards  */}


      <div className="mt-4 flex justify-center gap-3">
        <div className="bg-gray-100 hover:bg-gray-200 w-96 h-24 p-2 rounded-2xl">
            
            <div className="ml-3 mt-3 grid-cols-1 justify-between">
            <p className="text-gray-400 font-mono">DISTRIBUTIION</p>
             <div className="mt-5">
             <img src={wallet} className='w-20' alt="" />
             </div>
            </div>
        
        </div>

        <div className="bg-gray-100 hover:bg-gray-200 w-96 h-24 p-2 rounded-2xl">
            
            <div className="ml-3 mt-3 grid-cols-1 justify-between">
            <p className="text-gray-400 font-mono">DISTRIBUTIION</p>
             <div className="mt-5">
             <img src={pay} className='w-14' alt="" />
             </div>
            </div>
        
        </div>

        <div className="bg-gray-100 hover:bg-gray-200 w-96 h-24 p-2 rounded-2xl">
            
            <div className="ml-3 mt-3 grid-cols-1 justify-between">
            <p className="text-gray-400 font-mono">LIQUIDITY</p>
             <div className="mt-5">
             <img src={hub} className='w-14' alt="" />
             </div>
            </div>
        
        </div>

        <div className="bg-gray-100 hover:bg-gray-200 w-96 h-24 p-2 rounded-2xl">
            
            <div className="ml-3 mt-3 grid-cols-1 justify-between">
            <p className="text-gray-400 font-mono">TOKEN</p>
             <div className="mt-5">
             <img src={porta} className='w-20' alt="" />
             </div>
            </div>
        
        </div>

        
      </div>
    </div>
  )
}

export default Herocards