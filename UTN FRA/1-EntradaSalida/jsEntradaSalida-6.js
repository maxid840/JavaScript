/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
   	var numero1=document.getElementById('numeroUno').value;
 	var numero2=document.getElementById('numeroDos').value;

 	numero1=parseInt(numero1); //parseInt trunca los numeros en valores enteros
 	numero2=parseInt(numero2);

 	var resultado=numero1+numero2; /*Definimos esta variable para resolver 
 	                               la operacion matematica entre variables.*/

 	alert("el resultado es "+resultado);
}

//Esta OKEY