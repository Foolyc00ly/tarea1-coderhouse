import{ILibro}from './interfaces/ILibro';
import{IUsuario}from './interfaces/IUsuario';
export class Usuario implements IUsuario{
    public nombre:string;
    public apellido:string;
    public libros:ILibro[];
    public mascotas:string[];
    constructor(
        nombre:string,
        apellido:string,
        libros:ILibro[],
        mascotas:string[]
    ){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    getFullName():string{
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(...mascota:string[]):void{
        mascota.forEach(m=>this.mascotas.push(m));
    }

    countMascotas():number{
        return this.mascotas.length;
    }

    addBook(...libros:ILibro[]):void{
        libros.forEach(l=>this.libros.push(l));
    }
    getBookNames():string[]{
        return this.libros.map(l=>l.nombre)
    }
}