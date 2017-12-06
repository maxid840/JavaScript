/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
	function Mostar()
{
    var nombre;

	nombre=prompt("Ingrese Su Nombre");	

	nombre=document.getElementById('elNombre').value=nombre; //Solo se usa asi en este caso

	alert("Su nombre es "+nombre);
}

//Esta OKEY

/*corregir en casa*/