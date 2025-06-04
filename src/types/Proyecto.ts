export interface Proyecto {
  titulo: string;
  slug: string;
  type: string; 
  estado: boolean;
  categoria: string[]; 
  fecha: number; // Year as a number
  demoUrl: string;  
  gitUrl: string;  
  descripcionCard: string;
  descripcionPage: { [key: string]: any };
  thumb: string;  
  imagen: string;  
  stack: string[];  
  disable: boolean;
}