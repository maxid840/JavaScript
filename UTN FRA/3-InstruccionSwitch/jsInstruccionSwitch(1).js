function Mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Enero":                          //Asignamos un Valor/Texto al caso o CASE 
	alert("Que comiences bien el año!!!");
	break;                                 //Finalizamos la ejecución del CASE
	
	case "Marzo":
	alert("A clases!!!");
	break;

	case "Julio":
	alert("Se vienen las vacaciones!!!");
	break;

	case "Diciembre":
	alert("Felices fiestas!!!");
	break;

} 



}//FIN DE LA FUNCIÓN
/*TENER EN CUENTA EL TABULADO!!!
CASE SIEMPRE VA DENTRO DE SWITCH
La funcion Switch no muestra errores en
F12, siempre ver que valor le asignamos a
la variable en cada Case*/

//Funciona OKEY