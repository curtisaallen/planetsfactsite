'use client'
import React, { useState } from 'react'
import planetsData from '../public/data.json';
import { HeaderComponent } from '../app/components/HeaderComponent';
import { PlanetComponent } from "./components/PlanetComponent";
import { Planet } from "./interface/Planet";

export default function Home() {
  const [planet, setPlanet] = useState('Mercury');
  const handleDataFromChild = (childData:string) => {
    setPlanet(childData);
  };
  const handlePlanet = (name:string) => {
    return planetsData.find(planet => planet.name === name)
  }
  const selectedPlanet = handlePlanet(planet);
  return (
    <>
    <HeaderComponent data={planetsData as Planet[]} onDataChange={handleDataFromChild} />
    {selectedPlanet && <PlanetComponent planet={selectedPlanet} />}
    </>
  );
}
