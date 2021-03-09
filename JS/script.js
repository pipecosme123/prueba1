var num1 = 1;
var num2 = 2;

var stOperation = "";

function onClickClaculator(){
    this.num1 = parseInt(document.getElementById('num1').value);
    this.num2 = parseInt(document.getElementById('num2').value);
    this.stOperation = document.getElementById('op').value.toUpperCase();
    calcular();
}

/**
 * 
 * @param {int} num1 
 * @param {int} num2 
 * @param {string} op 
 * @returns int
 * Esta funcion calcula una operacion basica matematica (suma, resta, multiplicacion, division) entre dos numeros
 */
function calcular(){
    var result ="";
    if(this.stOperation == "+"){
        result = this.num1 + this.num2;
        
    }else if(this.stOperation == "-"){
        result = this.num1 + this.num2;
        
    }else if(this.stOperation == "*"){
        result = this.num1 + this.num2;
        
    }else if(this.stOperation == "/"){
        result = this.num1 + this.num2;  
    }
    console.log(result);
    document.getElementById("rPantalla").innerHTML = result;
    
}
