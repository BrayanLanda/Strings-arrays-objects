'use strict'
/*
Reto 2: Validador de Contraseñas seguras

Crear un script que valide contraseñas seguras. El script debe cumplir con las siguientes condiciones:

Solicita al usuario que ingrese una contraseña por prompt().
Verifica si la contraseña ingresada tiene al menos 8 caracteres.
Verifica si la contraseña contiene al menos un número.
Verifica si la contraseña contiene al menos una letra.
Verifica si la contraseña contiene al menos un caracter especial. Los caracteres especiales permitidos son los siguientes: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \ ~ `
Si la contraseña cumple con todas las condiciones, muestra un mensaje de "Contraseña segura".
Si la contraseña no cumple con alguna de las condiciones, muestra un mensaje de "Contraseña insegura" y una lista de las condiciones que no cumple.
 */

console.log('Hello World')
// function to validate a password
const validatePassword = function(password){
    const minLength = 8;
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()+=_\-{}[\]:;"'?<>,.|/\\~`]/.test(password);

    //check if all criteria are met
    if(password.length >= minLength && hasNumber && hasLetter){
        return 'Secure Password';
    }else{
        //list of criteria not met
        const unmetCriteria = [];
        if(password.length < minLength){
            unmetCriteria.push('must be at least 8 characters long');
        }
        if(!hasNumber){
            unmetCriteria.push('must contain at least one number');
        }
        if(!hasLetter){
            unmetCriteria.push('must contain at least one letter');
        }
        if(!hasSpecialChar){
            unmetCriteria.push('must contain at least one special character');
        }

        //Return message
        return `Insecure Password. Unmet criteria: ${unmetCriteria.join(', ')}`;
    }
}

//prompt 
const password = prompt('Enter your password: ');

//calling function
const result = validatePassword(password);
alert(result);