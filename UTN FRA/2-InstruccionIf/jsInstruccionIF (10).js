function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.floor((Math.random() * 10) + 1); 
	
	if (nota>=9)
	{
		alert ("Excelente: "+nota);
	}
	else
	if (nota>4&&nota<9)
	{
		alert ("Aprobaste: "+nota);
	}
	else
	if (nota<4)
	{
		alert ("Vamos, la proxima se puede: "+nota);
	}

}//FIN DE LA FUNCIÓN
/*
Nota:
Herramientas: Utilizar F8 y F10 como herramienta para ver el proceso corriendo en 
el navegador y detectar errores o realizar testeo (breakpoint).

Sintaxis: La forma de mejor performance seria:

if (nota>=9)
	{
		alert ("Excelente: "+nota);
	}
	else
	{
		if (nota>4&&nota<9)
			{
			alert ("Aprobaste: "+nota);
	}
		else
		if (nota<4)
			{
			alert ("Vamos, la proxima se puede: "+nota);
	}

	}

*/
	
//Esta OKEY