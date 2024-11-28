
export interface Planet {
    name: string;
    [key: string]: any;
  }
  
export interface HeaderComponentProps {
   data?: Planet[]; 
   onDataChange: (value: string) => void;
}

export interface PlanetComponentProps {
    data?: Planet[]; 
    planet: any;
 }