//some: devuelve verdadrero si alemenos 1 de los elmentos del vector cumple con las condiciones, si ninguno la cumple devuelve falso.

const vcector=[1,2,3,4,5,6,7,8,9, -10 ];

//verificar si el array tiene valores negativos
const existenNegativos=vcector.some(elemntos=>{
    return elemento<0;
});
console.log( " Existe un valor negativo????", existenNegativos);


// el metodo map() crea una nueva matriz con los resultados de llamar a una funcion proporcionada en cada elemento de la matriz llamdas

//se pide duplicar cada elemento del array de numeros
//Este resultado debe de almacenarse en un nuevo array
const numeros=[ 2, 3, 10, 22, 5, 7, 11, 1];

constnumerosDuplicados = numeros.map(elemento => {
    return elemento*2;
})
console.log("vector original ", numeros);
console.log("Nuevo vector ", numerosDuplicados);
    //Diseñe la funcion que devuelve cada elemento del vector elevado al cuadrado.
    //Haga 2 llamadas en la funcion 

    const cuadrado=function(array)
    {
        return vcector.map(item=> item*item);
    }

    console.log(cuadrado([1, 2, 3 ]));
        console.log(cuadrado([4, 5, 6 ]);

        //El metodo reduce() ejecuta una funcion de devolucion de llamada "reductora" proporcionada por el usuario en cada elemento
        
        //de la matriz , en orden, pasando el valor de retorno del calculo en el elemnto anterior. el resultado final de ejecutar el reductor en
        
        //en todos los elemntos de la matriz es un valor unico

        const vector=[1, 4, 10, 20, 33, 45, 4, 2, 15 ];
        //const valiicial=0;
        const sumatoria =vector.reduce(ac, va) =>{
            return ac+va
        }, 0);
        console.log("La sumatoria del vector es: ", sumatoria);

        //Diseñe la funcion que devuelve el producto de los elentos de un vector.
        // llamar 2 veces la funcion
const producto = function(vector)
{
    return vector.reduce( (ac, va) => {
        return ac*va
    },1)
}

console.log(producto([1,2, 3]));
console.log(producto([4, 5, 6 ]));S

// foreach: recorre todos los elementos del vector

vector.forEach( (num, index)=>{
    console.log("elementos:", num, inder);
})

//se tiene una cadena de caracteres, se pide diseñar, diseñar la funcion que
//devuelva la cadena sin comentarios (devuelve solo vocales)
//ejemplo "hola Esmeraldas "
//Resultado esperado; oa Eaa"
//utilice filter











    