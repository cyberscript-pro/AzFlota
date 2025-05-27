type Vehiculo = {
  chapa: string
}
export interface Chofer {
    nombre: string;
    edad: number;
    sexo: "M" | "F";
    ci: string;
    licencia: string;
    telefono: string;
    vehiculos?: Vehiculo[];
    isAvailable?: boolean;
}

export interface ChoferFront {
  nombre: string;
  edad: string;
  sexo: "M" | "F";
  ci: string;
  licencia: string;
  telefono: string;
  vehiculos?: Vehiculo[];
}

export type ChoferPost = {
  nombre: string;
  edad: number;
  sexo: "M" | "F";
  ci: string;
  licencia: string;
  telefono: string;
}