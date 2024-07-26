import Phone from '../assets/Phone.png'
import HeadPhone from '../assets/HeadPhone.png'
import Big from '../assets/Shoes.png'
import Shirt from '../assets/Shirt.png'
import Cube from '../assets/Cube.png'

import { useState } from 'react'

export default function Products() {
    const [timer, setTimer] = useState(1)

    setTimeout(() => {
        setTimer(timer + 1)
        if (timer == 5) {
            setTimer(1)
        }
    }, "7000")
    return (
        <div className='h-full w-full flex justify-center items-center'>

            <span className={`fixed h-full ${timer == 1 ? 'animate-fade-in' : timer == 2 ? 'animate-fade-out' : 'hidden'}`}>
                <div className='bg-[#cda7a6] bg-gradient-to-t from-[#cda7a6] to-[#eabdbb] w-full h-full flex justify-center items-center'>
                    <span className={`${timer == 1 ? 'animate-spin-morph-open' : timer == 2 ? 'animate-spin-morph-close' : 'hidden'}`}>
                        <img
                            className='block z-10 hover:scale-110 transition-all duration-150'
                            src={Phone}
                            alt="Phone"
                        />
                    </span>

                </div>

            </span>
            <span className={`fixed h-full ${timer == 2 ? 'animate-fade-in' : timer == 3 ? 'animate-fade-out' : 'hidden'}`}>
                <div className='bg-[#e5964f] bg-gradient-to-t from-[#e5964f] to-[#f6b378] w-full h-full flex justify-center items-center'>
                    <span className={`${timer == 2 ? 'animate-spin-morph-open' : timer == 3 ? 'animate-spin-morph-close' : 'hidden'}`}>
                        <img
                            className='block z-10 hover:scale-110 transition-all duration-150'
                            src={HeadPhone}
                            alt="Phone"
                        />
                    </span>
                    {/* <img
                        className='fixed bottom-0 right-0 w-2/3 brightness-125 opacity-40'
                        src={CornerBlob}
                        alt="Phone"
                    /> */}
                </div>
            </span>
            <span className={`fixed h-full ${timer == 3 ? 'animate-fade-in' : timer == 4 ? 'animate-fade-out' : 'hidden'}`}>
                <div className='bg-[#2c5f82] bg-gradient-to-t from-[#40657d] to-[#328ecb] w-full h-full flex justify-center items-center'>
                    <span className={`${timer == 3 ? 'animate-spin-morph-open' : timer == 4 ? 'animate-spin-morph-close' : 'hidden'}`}>
                        <img
                            className='block z-10  hover:scale-110 transition-all duration-150'
                            src={Big}
                            alt="Phone"
                        />
                    </span>
                    {/* <img
                        className='fixed bottom-0 right-0 w-2/3 brightness-125 opacity-40'
                        src={CornerBlob}
                        alt="Phone"
                    /> */}
                </div>
            </span>
            <span className={`fixed h-full ${timer == 4 ? 'animate-fade-in' : timer == 5 ? 'animate-fade-out' : 'hidden'}`}>
                <div className='bg-[#29a17b] bg-gradient-to-t from-[#4aa98b] to-[#00bd81] w-full h-full flex justify-center items-center'>
                    <span className={`${timer == 4 ? 'animate-spin-morph-open' : timer == 5 ? 'animate-spin-morph-close' : 'hidden'}`}>
                        <img
                            className='block z-10  hover:scale-110 transition-all duration-150'
                            src={Shirt}
                            alt="Phone"
                        />
                    </span>
                    {/* <img
                        className='fixed bottom-0 right-0 w-2/3 brightness-125 opacity-40'
                        src={CornerBlob}
                        alt="Phone"
                    /> */}
                </div>
            </span>
            <span className={`fixed h-full ${timer == 5 ? 'animate-fade-in' : timer == 1 ? 'animate-fade-out' : 'hidden'}`}>
                <div className='bg-[#878787] bg-gradient-to-t from-[#555555] to-[#8d8d8d] w-full h-full flex justify-center items-center'>
                    <span className={`${timer == 5 ? 'animate-spin-morph-open' : timer == 1 ? 'animate-spin-morph-close' : 'hidden'}`}>
                        <img
                            className='block z-10  hover:scale-110 transition-all duration-150'
                            src={Cube}
                            alt="Phone"
                        />
                    </span>
                    {/* <img
                        className='fixed bottom-0 right-0 w-2/3 brightness-125 opacity-40'
                        src={CornerBlob}
                        alt="Phone"
                    /> */}
                </div>
            </span>



        </div >

    )
}
