export interface Proyecto {
  titulo: string;
  slug: string;
  type: string; 
  estado: boolean;
  categoria: string[]; // Array of strings
  fecha: number; // Year as a number
  demoUrl: string; // URL as a string
  gitUrl: string; // URL as a string
  descripcion: string;
  thumb: string; // File name as a string
  imagen: string; // File name as a string
  stack: string[]; // Array of strings
  disable: boolean;
}