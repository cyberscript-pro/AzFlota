export interface Chofer {
    nombre: string;
    edad: number;
    sexo: "M" | "F";
    ci: string;
    licencia: string;
    telefono: string;
}

export interface ChoferFront {
  nombre: string;
  edad: string;
  sexo: "M" | "F";
  ci: string;
  licencia: string;
  telefono: string;
}

export type ChoferPost = {
    nombre: string;
    ci: string;
    licencia?: string;
}