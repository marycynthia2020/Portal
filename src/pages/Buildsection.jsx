import React from 'react'
import Blackbutton from '../components/ui/Blackbutton'
import card1image from '../img/4016607.jpg'
import card1image1 from '../img/leftcard-1.jpg'
import card1image2 from '../img/leftcard-2.jpg'
import card1image3 from '../img/leftcard-3.jpg'
import card1image4 from '../img/left-card4.jpg'
import card1image5 from '../img/leftcard-5.jpg'
import Whitebutton from '../components/ui/Whitebutton'

const Buildsection = () => {
    return (
        <div>

            <div>
                <hr className='my-3' />
                <p className='flex justify-center'>THE PORTAL STACK</p>
            </div>

            <div className='flex flex-col gap-5 items-center'>
                <div className='mx-[90px] w-[700px] font-bold text-center'>
                    <h2 className='text-[50px]'>
                        Build on the infrastructure uniting Web3
                    </h2>
                    <p className='mx-3 text-gray-500/50'>Build on Portal to harness the power of the Hyperway: our universal network supercharging your distribution.
                    </p>
                </div>
                <Blackbutton />
            </div>

            <div className='grid grid-cols-2 gap-6 my-10 mx-8 h-[695px]'>

                <div className='relative rounded-xl overflow-hidden border'>
                    <img src={card1image} alt="" className='absolute -z-10 object-cover w-full h-full opacity-70' />
                    <div className="flex justify-between text-white px-6 py-5">
                        <p className="text-[30px] font-bold">Discover the best Web3 content</p>
                        <div className='w-[10px] h-[10px] bg-white rounded-full'></div>
                    </div>


                    <div className="rounded-xl overflow-hidden w-[70px] absolute left-[400px] top-[150px]">
                        <img src={card1image2} alt="" className='w-full h-full object-cover' />
                    </div>

                    <div className="rounded-xl overflow-hidden w-[150px] absolute left-[100px] top-[150px] ">
                        <img src={card1image1} alt="" className='w-full h-full object-cover' />
                    </div>

                    <div className="rounded-xl overflow-hidden w-[140px] absolute left-[400px] top-[290px]">
                        <img src={card1image5} alt="" className='w-full h-full object-cover' />
                    </div>

                    <div className="rounded-xl overflow-hidden w-[90px] absolute left-[70px] top-[400px]">
                        <img src={card1image3} alt="" className='w-full h-full object-cover' />

                    </div>

                    <div className="rounded-xl overflow-hidden w-[60px] h-[60px] absolute left-[300px] top-[500px]">
                        <img src={card1image4} alt="" className='w-full h-full object-cover' />
                    </div>

                    <div className='absolute bottom-5 mx-7'>
                        <Whitebutton />
                    </div>
                </div>

                <div className='relative rounded-xl overflow-hidden border bg-[#e1e1e1]'>
                    <div className="flex justify-between text-white px-6 py-5">
                        <p className="text-[30px] text-black font-bold">Access liquidity on every chain</p>
                        <div className='w-[10px] h-[10px] bg-black rounded-full'></div>
                    </div>


                   <div>
                    <div className='flex'>
                        
                    </div>
                   </div>

                    <div className='absolute bottom-5 mx-7'>
                        <Whitebutton />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Buildsection