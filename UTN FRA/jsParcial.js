/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{
	/*1) parcial E/S
	-se modifico variable en html para que permita tomar dato con 'laBase'
	
	var base;
	var perimetro;

	base=document.getElementById('laBase').value;
	base=parseInt(base);

	perimetro=base*4;

	alert('El perimetro es del cuadrado es '+perimetro);
	*/
    


	/*2) parcial E/S
	-se modifico variable en html para que permita tomar dato con 'impFinal'
	
	var importe;
	var importeFinal;
	var iva;

	importe=prompt('Ingrese el importe del producto: ');
	importe=parseInt(importe);

	iva=importe*21/100;
	iva=parseInt(iva);

	importeFinal=importe+iva;
	importeFinal=parseInt(importeFinal);

	document.getElementById('impFinal').value=importeFinal;
	*/



	/*3) parcial E/S
	-se modificaron las variables de html

	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById('elLargo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('elAncho').value;
	ancho=parseInt(ancho);

	perimetro=(largo*2)+(ancho*2);

	alambre=perimetro*3;

	alert('Se requeriran '+alambre+' metros de alambre para colocar 3 hilos en el perimetro.');
	*/



	/*4) parcial IF

	var numero1;
	var numero2;
	var resultado;

	numero1=prompt('Ingrese un valor');
	numero1=parseInt(numero1);

	numero2=prompt('Ingrese otro valor');
	numero2=parseInt(numero2);

	if(numero1==numero2)
	{
		resultado=numero1*numero2;
	}
	else
	{
		if(numero1>numero2)
		{
			resultado=numero1-numero2;
		}
		else
		{
			if(numero1<numero2)
			{
				resultado=numero1+numero2;
			}
		}
	}

	document.write('El resultado es '+resultado).value=resultado;
	*/



	/*5) parcial Switch

	var dia;

	dia=prompt('Ingrese un dia de la semana');

	switch(dia)
	{
		case 'lunes':
		case 'martes':
		case 'miercoles':
		case 'jueves':
		case 'viernes':
		alert('A TRABAJAR!!!');
		break;

		case 'sabado':
		case 'domingo':
		alert('ES FIN DE SEMANA!!!');
		break;

		default:
		alert('Dato incorrecto, por favor vuelva a ingresar un dia de la semana');
		break;
	}
	*/


 
 	/*6) parcial Interaciones

	var importe;
	var contador=0;
	var max=0;
	var min=0;

	while(contador<24)
	{
		contador++;

		importe=prompt('Ingrese valor de ventas de la jornada');
		importe=parseInt(importe);

			while(isNaN(importe)||(importe<=0))
		{
			importe=prompt('ERROR, reingrese nuevamente el valor');
			importe=parseInt(importe);
		}//fin validador

	if(contador == 1)
    {
        max=importe;
        min=importe;
    }
      
	if(contador>1&&importe>max)
    {
        max=importe;
    }
      
    if (contador>1&&importe<min)
    {
        min=importe;
    }//Fin max&min

    }//Fin 24 tomas de datos

    document.write('el importe minimo es '+min+'.<br/>');  //<br/> se usa para agregar un salto en el texto. document.write SE ESCRIBE ASI!!!
    document.write('el importe maximo es '+max+'.');
*/



	var nota;
	var sexo;
	var promedio;
	var acumulador=0;
	var contador=0;
	var max;
	var min;
	
	while(contador<4)
	{
		contador++;

		nota=prompt('Ingrese su calificación');
		nota=parseInt(nota);
		
		while(isNaN(nota)||(nota<=0||nota>10))
		{
			nota=prompt('ERROR, Ingrese nuevamente su calificación');
			nota=parseInt(nota);
		}//Fin validador nota
		
		acumulador=acumulador+nota;
		
		sexo=prompt('Ingrese su sexo');

		while(!(sexo=='f'||sexo=='m'))
		{
			sexo=prompt('ERROR, Ingrese nuevamente su sexo');
		}//Fin validador sexo
	}//Fin contador

	promedio=acumulador/4;

	if(contador == 1)
    {
        max=nota;
        min=nota;
    }
      
	if(contador>1&&nota>max)
    {
        max=nota;
    }
      
    if (contador>1&&nota<min)
    {
        min=nota;
    }

    document.write('El promedio de notas es '+promedio+'.<br/>');
    document.write('La nota mas baja fue '+min+'.<br/>');
    document.write('La nota mas alta fue '+max+'.<br/>');
















}


//Esta OKEY