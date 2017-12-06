/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre; //Definimos variable
	
	nombre=prompt("ingrese su nombre"); /*Definimos PROMPT como instrucción para tomar
	                                    registro de un dato desde la pagina y lo asignamos
	                                    a una variable*/
	
	alert("bienvenido "+nombre); //En este paso estamos concatenando texto y variable.
}

/*
NOTA:
Sintaxis: Notese como anteriormente remarcamos que el texto
se coloca entre las comillas, ahora añadiremos como concepto
que la variable va sin comillas. Como resultante nos mostrara
un mensaje y nuestra dato asignado a la variable.
*/

//Esta OKEY
