/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	sueldo=document.getElementById('sueldo').value;

	sueldo=parseInt(sueldo);
	resultado=parseInt(resultado);

	resultado=sueldo*1.10; /*1.10 es equivalente a simplificar
	                       10/100*/

	alert("su nuevo sueldo es "+resultado);
}


//Esta OKEY