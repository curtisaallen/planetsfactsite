'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { PlanetComponentProps } from "../interface/Planet";

export const PlanetComponent: React.FC<PlanetComponentProps> = ({ planet }) => {
    const [currentSlide, setCurrentSlide] = useState(`translate3d(0, 0, 0)`);

    const overviewNext = () => {
        setCurrentSlide(`translate3d(0, 0, 0)`);
        };

    const internalNext = () => {
        setCurrentSlide(`translate3d(-100%, 0, 0)`);
      };

    const surfaceNext = () => {
        setCurrentSlide(`translate3d(-200%, 0, 0)`);
    };

    useEffect(() => {
        setCurrentSlide(`translate3d(0, 0, 0)`);
    }, [planet]); 

  return (
    <div className='planet_main overflow-hidden'>


        <div className='sliderContainer flex transition-transform duration-500'
             style={{
                transform: currentSlide,
              }}
        >
            <div className='planetSlides flex-shrink-0 basis-full'>
                <div className='grid gap-4 sm:grid-cols-12 pt-32 pb-20'>
                    <div className='col-span-12 sm:col-span-9 flex justify-center'>
                        <Image
                        src={planet.images.planet}
                        width={458}
                        height={452}
                        className='max-w-full h-auto object-contain'
                        alt="Product image"
                    />
                    </div>
                    <div className='col-span-12 sm:col-span-3 flex-auto md:w-64'>
                        <div className='mb-20'>
                            <h2 className='font-antonio text-[50px] font-bold'>
                                {planet.name}
                            </h2>
                            <p>
                              {planet.overview.content}
                            </p>
                            <p className='flex flex-row my-5'>Source:
                            <a className='flex flex-row justify-center items-center ms-3' href={planet.overview.source}>Wikipedia
                            <span className='ms-3'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 0 1-.305.46.544.544 0 0 1-.195.04.465.465 0 0 1-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 0 1-.352.149.48.48 0 0 1-.352-.149l-.796-.797a.48.48 0 0 1-.149-.351.48.48 0 0 1 .149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 0 1 5.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0 1 10 2.5v3.75z" opacity="0.5"></path></svg></span></a></p>     
                        </div>    

                        <div className='planetBtn_container'>
                        <button onClick={overviewNext}  className='flex transition border border-[#419db9] border-opacity-20 bg-[#419db9] hover:bg-[#303047] hover:border-[#303047] px-6 py-3 w-full mb-3 font-antonio font-bold'>
                            <span className='me-4'>01</span>
                            <p>overview</p>
                        </button>
                        <button onClick={internalNext} className='flex transition border border-white border-opacity-20 hover:bg-[#303047] hover:border-[#303047] px-6 py-3 w-full mb-3 font-antonio font-bold'>
                            <span className='me-4'>02</span>
                            <p> internal stucture</p>
                        </button>
                        <button onClick={surfaceNext}  className='flex transition border border-white border-opacity-20 hover:bg-[#303047] hover:border-[#303047] px-6 py-3 w-full mb-3 font-antonio font-bold'>
                            <span className='me-4'>03</span>
                            <p> surface geology</p>
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='planetSlides flex-shrink-0 basis-full'>
                <div className='grid gap-4 sm:grid-cols-12 pt-32 pb-20'>
                    <div className='col-span-12 sm:col-span-9 flex justify-center'>
                        <Image
                        src={planet.images.internal}
                        width={458}
                        height={452}
                        className='max-w-full h-auto object-contain'
                        alt="Product image"
                    />
                    </div>
                    <div className='col-span-12 sm:col-span-3 flex-auto md:w-64'>
                        <div className='mb-20'>
                            <h2 className='font-antonio text-[50px] font-bold'>Uranus</h2>
                            <p>
                              {planet.structure.content}
                            </p>
                            <p className='flex flex-row my-5'>Source:
                            <a className='flex flex-row justify-center items-center ms-3' href={planet.structure.source}>Wikipedia
                            <span className='ms-3'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 0 1-.305.46.544.544 0 0 1-.195.04.465.465 0 0 1-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 0 1-.352.149.48.48 0 0 1-.352-.149l-.796-.797a.48.48 0 0 1-.149-.351.48.48 0 0 1 .149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 0 1 5.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0 1 10 2.5v3.75z" opacity="0.5"></path></svg></span></a></p>     
                        </div>    

                        <div className='planetBtn_container'>
                        <button onClick={overviewNext} className='flex transition border border-white border-opacity-20 hover:bg-[#303047] hover:border-[#303047] px-6 py-3 w-full mb-3 font-antonio font-bold' >
                            <span className='me-4'>01</span>
                            <p>overview</p>
                        </button>
                        <button onClick={internalNext} className='flex transition border border-[#419db9] border-opacity-20 bg-[#419db9] hover:bg-[#303047] hover:border-[#303047] px-6 py-3 w-full mb-3 font-antonio font-bold'>
                            <span className='me-4'>02</span>
                            <p> internal stucture</p>
                        </button>
                        <button onClick={surfaceNext}  className='flex transition border border-white border-opacity-20 hover:bg-[#303047] hover:border-[#303047] px-6 py-3 w-full mb-3 font-antonio font-bold'>
                            <span className='me-4'>03</span>
                            <p> surface geology</p>
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='planetSlides flex-shrink-0 basis-full'>
                <div className='grid gap-4 sm:grid-cols-12 pt-32 pb-20'>
                    <div className='col-span-12 sm:col-span-9 flex justify-center'>
                        <Image
                        src={planet.images.geology}
                        width={458}
                        height={452}
                        className='max-w-full h-auto object-contain'
                        alt="Product image"
                    />
                    </div>
                    <div className='col-span-12 sm:col-span-3 flex-auto md:w-64'>
                        <div className='mb-20'>
                            <h2 className='font-antonio text-[50px] font-bold'>Uranus</h2>
                            <p>
                              {planet.geology.content}
                            </p>
                            <p className='flex flex-row my-5'>Source:
                            <a className='flex flex-row justify-center items-center ms-3' href={planet.geology.source}>Wikipedia
                            <span className='ms-3'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 0 1-.305.46.544.544 0 0 1-.195.04.465.465 0 0 1-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 0 1-.352.149.48.48 0 0 1-.352-.149l-.796-.797a.48.48 0 0 1-.149-.351.48.48 0 0 1 .149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 0 1 5.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0 1 10 2.5v3.75z" opacity="0.5"></path></svg></span></a></p>     
                        </div>    

                        <div className='planetBtn_container'>
                        <button onClick={overviewNext} className='flex transition border border-white border-opacity-20 hover:bg-[#303047] hover:border-[#303047] px-6 py-3 w-full mb-3 font-antonio font-bold'>
                            <span className='me-4'>01</span>
                            <p>overview</p>
                        </button>
                        <button onClick={internalNext} className='flex transition border border-white border-opacity-20 hover:bg-[#303047] hover:border-[#303047] px-6 py-3 w-full mb-3 font-antonio font-bold'>
                            <span className='me-4'>02</span>
                            <p> internal stucture</p>
                        </button>
                        <button onClick={surfaceNext} className='flex transition border border-[#419db9] border-opacity-20 bg-[#419db9] hover:bg-[#303047] hover:border-[#303047] px-6 py-3 w-full mb-3 font-antonio font-bold'>
                            <span className='me-4'>03</span>
                            <p> surface geology</p>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='grid sm:grid-cols-4 grid-cols gap-4  pb-20'>
             <div className='flex flex-col border border-white border-opacity-20 px-6 py-3 font-antonio font-bold'>
                <h2 className='text-[14px] opacity-35 font-bold uppercase'>rotation time</h2>
                <h3 className='text-[40px] text-white uppercase font-antonio'>
                    {planet.rotation}
                </h3>
             </div>
             <div className='flex flex-col border border-white border-opacity-20 px-6 py-3 font-antonio font-bold'>
                <h2 className='text-[14px] opacity-35 font-bold uppercase'>revolution time</h2>
                <h3 className='text-[40px] text-white uppercase font-antonio'>
                    {planet.revolution}
                </h3>
             </div>
             <div className='flex flex-col border border-white border-opacity-20 px-6 py-3 font-antonio font-bold'>
                <h2 className='text-[14px] opacity-35 font-bold uppercase'>radius</h2>
                <h3 className='text-[40px] text-white uppercase font-antonio'>
                   {planet.radius}
                </h3>
             </div>
             <div className='flex flex-col border border-white border-opacity-20 px-6 py-3 font-antonio font-bold'>
                <h2 className='text-[14px] opacity-35 font-bold uppercase'>average temp.</h2>
                <h3 className='text-[40px] text-white uppercase font-antonio'>
                   {planet.temperature}
                </h3>
             </div>
        </div>
    </div>
  )
}