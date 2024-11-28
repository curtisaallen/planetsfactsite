export interface Planet {
   name: string;
   description?: string;
   diameter?: number;
   overview?: {
     content: string;
     source: string;
   };
   structure?: {
     content: string;
     source: string;
   };
   geology?: {
     content: string;
     source: string;
   };
   rotation?: string;
   revolution?: string;
   radius?: string;
   temperature?: string;
   images?: {
     planet: string;
     internal: string;
     geology: string;
   };
   [key: string]: string | number | undefined | Record<string, unknown>;
 }
 