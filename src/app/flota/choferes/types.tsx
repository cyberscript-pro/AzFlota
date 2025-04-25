export type Chofer = {
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