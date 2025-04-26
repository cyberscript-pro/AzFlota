export interface Chofer {
    uuid: string;
    nombre: string;
    ci: string;
    licencia: string;
}

export type ChoferPost = {
    nombre: string;
    ci: string;
    licencia?: string;
}

export interface ChoferExcel {
  nombre: string;
  ci: string;
  licencia: string;
}