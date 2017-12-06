function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

laHora=parseInt(laHora);

switch(laHora)
{
	case 07: 
	case 08:
	case 09:
	case 10:
	case 11:
	alert("Es de mañana");
	break;
}

}//FIN DE LA FUNCIÓN

/*
Nota:
Sintaxis: como en este caso buscamos ingresar valores horarios (no solamente tenemos
horarios enteros, sino que tenemos minutos tambien) debemos utilizar SIEMPRE PARSEINT y
colcar los valores SIN COMILLAS. De esta forma podremos visualizar tambien los minutos
intermedios entre hora y hora.
Como segunda acotación modifique el HTML para indicar de que forma introducir correctamente
la franja horaria a consultar
*/