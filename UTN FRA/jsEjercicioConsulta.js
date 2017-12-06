//Ejercicio de consulta (1)

/*Tomar datos por Prompt y mostrar por document.getElementbyId*/
function Mostar()
{
	var nombre;
	var edad;
	var sueldo;
	var zodiaco;
	var contador=0;

	while(contador<4)
	contador++;
	{
	
	nombre=prompt('Ingrese su nombre');
	edad=prompt('Ingrese su edad');
	edad=parseInt(edad);
	
	document.getElementById('elNombre').value=nombre; //la variable igualada por la derecha se muestra en el cuadro.
   	document.getElementById('laEdad').value=edad;

	//ahora haremos que lo que esta en un cuadro de texto pase a una variable

	nombre=document.getElementById('elNombre').value; //La variable igualada por la izquierda es ingresada por ID
	edad=document.getElementById('laEdad').value;
	edad=parseInt(edad); //coloco de nuevo por que estoy tomando el dato.

	/*A continuación debemos indicar si la persona es niño, adolescente, casi mayor, adulto, adulto mayor 
	tomando como referencia las siguientes edades:13,18,21,60,+60 */
	while(isNaN(edad)||(edad<0||edad>100))
	{
		edad=prompt('ERROR, reingrese su edad correctamente');
		edad=parseInt(edad);
	}


	if(edad<13)
	{
		alert('usted es un niño');
	}
	else
	{
		if(edad<18)
		{
			alert('usted es un adolescente');
		}
		else
		{
			sueldo=prompt('Ingrese su sueldo');
			sueldo=parseInt(sueldo);

				while(isNan(sueldo)||(sueldo<7000))
				{
					sueldo=prompt('ERROR, ingrese nuevamente su sueldo de forma correcta');
					sueldo=parseInt(sueldo);
				}
					if(sueldo<9000)
					{
						alert('Usted tiene un ingreso bajo');
					}
					else
					{
						if(sueldo<15000)
						{
							alert('usted tiene un sueldo promedio');
						}						
						else
						{
							if(sueldo>14000)
							{
								alert('usted tiene un buen sueldo');
							}
					    }
					}
					
			if(edad<21)
			{
				alert('usted es casi mayor');
			}			
			else
			{
				if(edad<60)
				{
					alert('usted es mayor');
				}
				else
				{
					if(edad>59)
					{
						alert('usted es un adulto mayor');
					}
				}
			}
		}
	}
	//Luego pedir el sueldo a los mayores de 21
	//Resolucion: pedimos el sueldo en la linea 43 dentro de if(edad<21)
	//ahora pedir signo del zodiaco y colocar msj por switch segun el signo

	zodiaco=prompt('ingrese su signo del zodiaco');

	switch(zodiaco)
	{
		case 'tauro':
		case 'geminis':
		alert('suerte en el amor');
		break;

		case'acuario':
		case'cancer':
		case'libra':
		case'pisis':
		case'sagitario':
		case'leo':
		case'virgo':
		case'aries':
		case'capricornio':
		case'escorpio':
		alert('suerte en el juego');
		break;

		default:
		alert('Ingrese nuevamente su signo de zodiaco de forma correcta');
	}
	//ahora necesitamos que nos indique si el valor del la edad es incorrecto y que nos pida 3 veces todos los datos
}
}//if(edad<13) - estamos indicando que este fin de funcion pertenece a...


//Esta OKEY
//Nota: If y else siempre se escriben dentro de una estructura de descarte.
/*
    Ejercicio original:

    /*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
    ej.: "Usted se llama José y tiene 66 años" 	
    function Mostar()

	var nombre=document.getElementById('elNombre').value;
	
	var edad=document.getElementById('laEdad').value;

	alert("usted se llama "+nombre+" y tiene "+edad+" años");  Concatenamos dos valores 
	                                                           con sus respectivos textos
*/

/*agregar maximo y minimo edades*/
