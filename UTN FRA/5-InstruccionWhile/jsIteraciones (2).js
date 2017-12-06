function Mostrar()
{
	//alert('iteración while');

var contador=11;

while(contador > 0)
{
	contador --;
	console.log("<h2>numero:"+contador+"</h2 <br>"); /*Herramienta para visualizar la ejecucion
	                                                 del proceso en la consola de F12 en el navegador*/
	document.write("<h2>numero:"+contador+"</h2 <br>")
}

}//FIN DE LA FUNCIÓN

/*
Nota:
Semantica: Combiene cargar primero los contadores
           Siempre va como ultima funcion el document.write
Herramientas:   console.log() muestra un mensaje en la consola.
				console.debug() muestra un mensaje y ademas nuestra el número de línea donde se encuentra.
				console.warn() muestra un mensaje de alerta con un icono y fondo amarillo para identificarlo.
				console.error() muestra un mensaje de error con un icono y fondo en color rojo.
*/

//Esta okey