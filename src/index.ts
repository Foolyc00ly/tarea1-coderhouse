import '../assets/style.css';
import { Usuario } from './classes/Usuario';
const usuario1:Usuario=new Usuario('Brad Richard','Cuenca Candela',[{nombre: 'El señor de las moscas',autor: 'William Golding'}],['perro','gato']);
console.log(usuario1);
console.log(`El usuario ${usuario1.getFullName()} tiene ${usuario1.countMascotas()} mascotas`);
console.log(`nombre: ${usuario1.getFullName()}`);
usuario1.addMascota('gato','perro','perico','zorro','leon');
console.log(`El usuario ${usuario1.getFullName()} tiene ${usuario1.countMascotas()} mascotas`);

usuario1.addBook(
    {nombre: 'Fundacion', autor: 'Isaac Asimov'},
    {nombre: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes'},
    {nombre: 'En busca del tiempo perdido', autor: 'Marcel Proust'},
);
console.log(usuario1.getBookNames());
console.log(usuario1);