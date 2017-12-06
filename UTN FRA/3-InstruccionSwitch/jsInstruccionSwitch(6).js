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
	
	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
	alert ("Es de tarde");
	break;

	case 20:
	case 21:
	case 22:
	case 23:
	case 00:
	case 01:
	case 02:
	case 03:
	case 04:
	case 05:
	case 06:
	alert ("Es de noche");
	break;

    default:                            
    alert("Rango horario incorrecto");
	break;
}

}//FIN DE LA FUNCIÓN
//Esta OKEY
/*
Nota:
Semantica: La forma mas acotada de poner esto es:

switch(true){
 		case (laHora >= 7 && laHora <=11):
 			alert("Es de mañana.");
 			break;

 		case (laHora > 11 && laHora <= 19):
 			alert("Es de tarde.");
 			break;

 		case (laHora > 19 && laHora <= 24):
 		
 		case (laHora >= 0 && laHora < 7):
 			alert("Es de noche.")
 			break;
 		
 		default:
 			alert("La hora no existe.");
 	}
Desde este punto comenzaremos a utilizar esta ultima.
*/