// Importacion de modulos
import './styles.css';

// Tip para realizar una sola importacion
import { ToDo, ToDoList } from './classes'; // Por defecto buscara el archivo index.js
import { crearToDoHTML } from './js/componentes';

export const toDoList = new ToDoList();

console.log( toDoList.toDos );
    
// Uso del forEach
// toDoList.toDos.forEach( toDo => ( crearToDoHTML( toDo ) ));

// Cuando el argumento a enviar es solo uno puede obviarse el argumento y solo llamar la funcion
// El 1er elemento del callback del forEach esta llamando al metodo crearToDoHTML y el argumento que envia es el 1er argumento que regresa el forEach
// Si el forEach regresa mas de un argmento ya no funcionaria
toDoList.toDos.forEach( crearToDoHTML );


// const tarea = new ToDo('Aprender JS!');

// tarea.completado = false;

// toDoList.nuevoToDo ( tarea );

// console.log( toDoList );

// crearToDoHTML( tarea );
