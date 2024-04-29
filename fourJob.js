'use strict';
/*
Crear un script que calcule estadísticas de calificaciones de un grupo de estudiantes. El script debe cumplir con las siguientes condiciones:

Solicita al usuario que ingrese las calificaciones de los estudiantes separadas por comas.
Convierte las calificaciones ingresadas a un array utilizando split().
Utiliza métodos de arrays como reduce(), map(), filter(), sort() para calcular las siguientes estadísticas:
Promedio de Calificaciones
Calificación Máxima
Calificación Mínima
Número de Aprobados (calificación mayor o igual a 70)
Número de Reprobados (calificación menor a 70)
Lista de Calificaciones Ordenadas de Mayor a Menor
Muestra las estadísticas de calificaciones al usuario.
*/

const calculateGrade = function(){
    const gradesAlumno = prompt('Enter student grades separated by commas: ');

    //Convert to array
    const gradesArray = gradesAlumno.split(',').map(Number);

    //Calculate avarage grade
    const avarageGrade = gradesArray.reduce((total, grade) => total + grade, 0) / gradesArray.length;

    //Calculate max
    const maxGrade = Math.max(...gradesArray);

    //Calculate min
    const minGrade = Math.min(...gradesArray);

    // Filter Max Grade
    const gradeMax = gradesArray.filter(grade => grade >=70);

    //Filter Min Grade
    const gradeMin = gradesArray.filter(grade => grade < 70);

    //Sort grades 
    const sortedGrades = gradesArray.slice().sort((a, b) => b -a);

    console.log(`Avarage grade: ${avarageGrade}
    Min grade: ${minGrade}
    Max grade: ${maxGrade}
    <70 ${gradeMin}
    >=70 ${gradeMax}
    Grades Descending: ${sortedGrades}`);
}

calculateGrade();