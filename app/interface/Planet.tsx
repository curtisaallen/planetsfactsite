
export interface Planet {
   name: string;
   description?: string; 
   diameter?: number; 
   [key: string]: string | number | undefined;
 }
 
export interface HeaderComponentProps {
  data?: Planet[]; 
  onDataChange: (value: string) => void;
}

export interface PlanetComponentProps {
   data?: Planet[]; 
   planet: Planet;
}