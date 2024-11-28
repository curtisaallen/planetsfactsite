import React, { useState } from 'react'
import { HeaderComponentProps } from "../interface/Planet";

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ data = [], onDataChange }) => {
    const [currentPlanet, setCurrentPlanet] = useState('Mercury');
    const handleClick = (e:any, name:string) => {
        e.preventDefault();
        onDataChange(name);
        setCurrentPlanet(name)
      };
  return (
    <header className='flex  md:flex-row flex-wrap flex-col md:justify-between justify-center items-center p-9 text-white'>
        <p className='logo flex flex-wrap items-center mb-6 md:mb-0'>THE PLANETS</p>
        <nav className='flex flex-wrap items-center justify-center gap-8'>
            {data.map((planet) => (

                <a key={planet.name} className={(planet.name === currentPlanet)? `active-${planet.name}` : ''} href="#" onClick={(e) => handleClick(e, planet.name)}>
                    {planet.name}
                </a>
            ))}
        </nav>
    </header>
  )
}
