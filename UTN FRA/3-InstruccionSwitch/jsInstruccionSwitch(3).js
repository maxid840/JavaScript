function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
	alert("Este mes no tiene mas de 29 dias");
	break;

	default:                                    /*Por medio del DEFAULT asignamos valor por defecto a todos los elementos
                                                no contemplados dentro de los parametros establecidos */
	alert("Este mes tiene 30 o mas dias");
	break;
}
	
	


}//FIN DE LA FUNCIÓN
//Esta OKEY
