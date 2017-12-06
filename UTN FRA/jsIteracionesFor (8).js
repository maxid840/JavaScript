function Mostrar()
{
	var numAnterior;
	var tieneDivisor;
	var numRecorrido;
	var numIngresado=prompt(numIngresado);
	numIngresado=parseInt(numIngresado);

		for(numRecorrido=numIngresado-1;numRecorrido>2;numRecorrido--)
	{
		tieneDivisor="no";
		for(numAnterior>=2;numAnterior<(numRecorrido/2);numAnterior++)
		{
			if(numRecorrido%numAnterior==0)
			{
				tieneDivisor="si";
				break;
			}
		}
	}

	if(tieneDivisor=="no")
	{
		console.log("es primo"+numRecorrido);
	}

}//FIN DE LA FUNCIÓN