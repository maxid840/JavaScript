function Mostrar()
{
//tomo la edad  
	var edad=document.getElementById('edad').value;

	if(edad<18)
	{
		if(edad>12)  /*Un IF dentro de otro permite asignar un rango y
		               evita redundancia al momento de mostrar el cartel.*/
		{
			alert("eres un adolescente");
		}
	}
		
}//FIN DE LA FUNCIÓN
 
//Esta OKEY

/*NOTA: 
Sintaxis: "&&"" es la simbologia del operador logico "AND".
semantica: Podemos expresar el ejercicio de rango de la siguiente forma tambien:

	if(edad<18&&edad>12)
	 {
		alert("eres un adolescente");
	 }

A partir de aqui empezaremos a utilizar esta forma mas simplificada.
*/