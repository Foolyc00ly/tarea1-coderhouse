import{ILibro}from './ILibro';
export interface IUsuario{
    nombre:string;
    apellido:string;
    libros:ILibro[];
    mascotas:string[];
    getFullName():string;
    addMascota(...mascota:string[]):void;
    countMascotas():number;
    addBook(...libros:ILibro[]):void;
    getBookNames():string[];
}