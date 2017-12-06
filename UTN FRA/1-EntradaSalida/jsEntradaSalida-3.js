/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;

	nombre=document.getElementById('elNombre').value; /*document.getElementById nos
	                                                  permite tomar un dato por Id desde
	                                                  la pagina (desde documento HTML)*/

	alert("Bienvenido "+nombre); 
}
 
 /*
 Nota:
 Sintaxis: Si escribimos document.get + TAB + SHIFT + I
           se completa la escritura de la instrucción.
           Sacar el id a asignar del input del HTML. 
 Semantica: es igual colocar el codigo de la forma arriba indicada
            o abreviarla de la siguiente forma:

    var nombre=document.getElementById('elNombre').value;

            De ahora en adelante usaremos la forma abreviada.
*/

//Esta OKEY
