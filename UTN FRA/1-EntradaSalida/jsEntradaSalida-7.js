/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var numero1=document.getElementById('numeroUno').value;
	var numero2=document.getElementById('numeroDos').value;

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);	

	var resultado=numero1+numero2;

	alert("la sumatoria da como resultado "+resultado);
	
}

	function restar()
{
	var numero1=document.getElementById('numeroUno').value;
	var numero2=document.getElementById('numeroDos').value;

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);	

	var resultado=numero1-numero2;

	alert("la resta da como resultado "+resultado);
	
}

function multiplicar()
{ 
	var numero1=document.getElementById('numeroUno').value;
	var numero2=document.getElementById('numeroDos').value;

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);	

	var resultado=numero1*numero2;

	alert ("la multiplicacion da como resultado "+resultado);
	
}

function dividir()
{
	var numero1=document.getElementById('numeroUno').value;
	var numero2=document.getElementById('numeroDos').value;

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);	

	var resultado=numero1/numero2;
	
	alert("la division da como resultado "+resultado);
}

//Esta OKEY