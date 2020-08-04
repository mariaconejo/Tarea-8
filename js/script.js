
//arreglo con las tareas
const things =  ['Práctica de Javascript', 'Ir al supermercado', 'Pasear al perro', 'Lavar los trastos'];
// arreglo con las posiciones 
const position = ['Tarea1', 'Tarea2', 'Tarea3', 'Tarea4'];

// asigna el elemento del div con el id 
const list = document.getElementById('list');
// crea la lista

const item = document.createElement('ul');
//Crea y agrega el elemento ul
list.appendChild(item);

//ciclo que crea los elmentos dependiendo del largo del array 
for(let i = 0; i < things.length; i++){

    //crea los li del ul
    const list_things = document.createElement('li');
    item.appendChild(list_things);

    // crea los input del de los li
    const input = document.createElement('input');
    list_things.appendChild(input);

    // le asigan los atributos al input
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', position[i]);

    // crea los label 
    const label = document.createElement('label');
    list_things.appendChild(label);

    // le asigna el atributo for a los label 
    label.setAttribute('for' , position[i]);
    // coloca el texto que contiene el arreglo things
    label.innerHTML = things[i];
}



