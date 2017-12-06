/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var resto;
	resto=parseInt(document.getElementById('numeroDividendo').value);
	resto%=parseInt(document.getElementById('numeroDivisor').value); /*El simbolo % representa modulo/resto */
	
	alert(resto)
}

/*
Nota: Definimos la variable en este caso dado que tuvimos que haces dos parseInt para resto
tanto para el divisor como para el dividendo, indicando en el divisor que se le indicar el
resto de la operación.
*/

//Esta  OKEY