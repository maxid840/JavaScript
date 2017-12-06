/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe=document.getElementById('importe').value;

	importe=parseInt(importe);
	resultado1=parseInt(resultado1);
	resultado2=parseInt(resultado2);

	var resultado1=importe*1/4;
	var resultado2=importe-resultado1;

	alert("su nuevo sueldo es "+resultado2);
}


/*Nota: Defino las variable separadas del codigo
para tener una vision mas sensilla del ejercicio,
es a gusto de cada uno unificarlo o no segun el caso.*/

//Esta OKEY