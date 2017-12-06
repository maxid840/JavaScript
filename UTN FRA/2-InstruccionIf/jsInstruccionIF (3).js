function Mostrar()
{
//tomo la edad  
	var edad=document.getElementById('edad').value;

		if(edad<18)
		{
			alert("Usted es menor de edad");
		}

		else                /*Si la condicion no es verdadera se ejecuta el ELSE.
			                Equivale a un "entonces" que deriva en otra instrucción IF*/
		
		if(edad>=18)
		{
			alert("Usted es mayor de edad");
		}

}//FIN DE LA FUNCIÓN

/*NOTA: 
Semantica: La forma correcta de poner el ELSE es entre las instrucciones IF.
           Usar de forma correcta los operadores, ya que sino pueden ocurrir 
           errores de ejecuccion. Por ejemplo colocar "=>" en lugar de ">=".*/

//Esta OKEY