'use strict'
/*
Crear un script que calcule el promedio de calificaciones de un estudiante. El script debe cumplir con las siguientes condiciones:

Solicita al usuario que ingrese las calificaciones del estudiante separadas por comas.
Convierte las calificaciones ingresadas a un array utilizando split().
Utiliza reduce() para sumar todas las calificaciones y calcular el promedio.
Muestra el promedio de calificaciones al usuario.
*/
console.log('hello world');
let flag = true;

//Fuction validation
// const validation = function(number){
//     if(!isNaN(number) && number > 0){
//         return true
//     }else{
//         alert('Invalid data');
//     }
// }

//Function grade average reduce
const gradeReduce = function(mark){
    const sum = mark.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
    return sum / mark.length;
}

//Function grade average foreach
const grade = function(mark){
    let total = 0;
    mark.forEach(sum =>{
        total += Number(sum);
        console.log(total);
    });
    // const average = Math.round((total)/mark.length);
    // return average;
    return total / mark.length;
} 

while(flag){
    //const notes = [4,5,5]
    const notes = (prompt('ingrese notas'));
    const averageMark = notes.split(',');
    console.log(typeof notes);
    const result = gradeReduce(averageMark);
    alert(result);
    flag = false;
    // if(validation(averageMark)){
    //     const result = grade(averageMark);
    //     alert(result);
    //     flag = false
    // }else{
    //     alert('Invalid data');
    // }   
}
