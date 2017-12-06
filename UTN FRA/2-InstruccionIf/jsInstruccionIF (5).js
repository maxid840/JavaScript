function Mostrar()
{
//tomo la edad  
	var edad=document.getElementById('edad').value;

	edad=parseInt(edad);

		if (edad<=18&&edad>12)
		{	
			alert("Usted es un adolescente");
		}
		else
		{
				if (!(edad<=18&&edad>12))
			{
				alert("Usted NO es un adolescente");
			}

		}

}

//FIN DE LA FUNCIÓN

/*
NOTA: Forma alternativa:

Sintaxis: "!" es la simbologia del operador logico "NOT".

*/
//Esta OKEY

