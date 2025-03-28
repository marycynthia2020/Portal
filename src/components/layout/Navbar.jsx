import React from 'react'
import Blackbutton from '../ui/Blackbutton'

const Navbar = () => {
  return (
    <div>
              <nav className="flex  z-50 justify-between items-center px-48">
        <div className="flex mt-5 items-center gap-5" >
          <span>
            <img src="" alt="" />
            <h1 className="text-4xl font-serif"><b>Portal</b></h1>
          </span>

          <div className="gap-5">
          <ul className="flex gap-9 bg-gray-200 p-0 items-center justify-center rounded-3xl w-80">
            <li className="font-medium text-gray-500 text-lg hover:bg-white  hover:p-1.5 hover:text-gray-950 rounded-3xl  px-1 py-2">
              <a href="">Solution</a>
            </li>

            <li className="font-bold text-gray-500 text-lg hover:bg-white hover:p-1.5 hover:text-gray-950 rounded-3xl px-1 py-2">
              <a href="">Build</a>
            </li>

            <li className="font-bold text-gray-500 text-lg hover:bg-white hover:p-1.5 hover:text-gray-950 rounded-2xl px-1 py-2">
              <a href="">Ecosystem</a>
            </li>
          </ul>
          </div>

        </div>

        {/* buttons  */}
        <div className='flex gap-4 items-center mt-5'>
        <Blackbutton/>
        <Blackbutton/>
        
        


        </div>
      </nav>
    </div>
  )
}

export default Navbar