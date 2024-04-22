'use strict'
/*
Reto 3: Validador de Correos Electrónicos

Crear un script que valide correos electrónicos. El script debe cumplir con las siguientes condiciones:

Solicita al usuario que ingrese un correo electrónico por prompt().
Verifica si el correo electrónico ingresado tiene un formato válido. Un correo electrónico válido debe cumplir con las siguientes condiciones:
Debe contener un solo símbolo '@'.
Debe contener al menos un punto '.' después del símbolo '@'.
El punto '.' y el símbolo '@' no pueden estar juntos.
El correo electrónico no puede contener espacios en blanco.
Si el correo electrónico cumple con todas las condiciones, muestra un mensaje de "Correo electrónico válido".
*/
//Valiable
let flag = true;

//Function validate email with acceptance parameters
const validateEmail = function(email){
    //variables function
    const atIndex = email.indexOf('@');
    const dotIndex = email.indexOf('.', atIndex);
    
    //conditionales if 
    if(atIndex === -1 || email.indexOf('@', atIndex +1) !== -1){
        return 'Invalid email. It should contain only one "@" symbol.';
    }
    if(dotIndex === -1 || dotIndex === atIndex + 1){
        return 'Invalid email. It should contain at lest one "." after the "@" symbol';
    }
    if(/\s/.test(email)){
        return 'Invalid email. Connot containt whitespace';
    }

    return 'Valid email';
}

//calling function / main while
while(flag){
    const email = prompt('Enter your email: ');
    const result = validateEmail(email);
    if(result === 'Valid email'){
        alert(result);
        flag = false;
    }else{
        alert(result);
    };
}