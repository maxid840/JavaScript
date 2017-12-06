 function Mostrar()
{
//alert('iteración while');                                 /*Funcion para testear la botonera. Una vez realizado el testing se colca como comentario*/
 
var contador = 0;       

while(contador < 10)                                        /*Una expresión que se evalúa antes de cada paso del bucle. 
                                                            Si esta condición se evalúa como verdadera, se ejecuta sentencia . 
                                                            Cuando la condición se evalúa como false, la ejecución continúa 
                                                            con la sentencia posterior al bucle while .
                                                            Una sentecia que se ejecuta mientras la condición se evalúa como verdadera.*/
{
	contador++;
	document.write("<h2>numero:" + contador + "</h2 <br>"); /*document.write escribe directo al hilo (stream) de un documento
	                                                        donde los valores dentro del parentesis forman una cadena que 
	                                                        contiene al texto asignado.*/ 
}
  
}//FIN DE LA FUNCIÓN 

/*Nota:
Sintaxis: "++" es un operador utilizado para indicar ascendencia o crecimiento,
          mientras que "--" muestra descendencia o decrecimiento.
Mecanica: 1-Definimos que la variable comienza con valor "cero".
          2-Por medio de while se define el sentido de la cuenta regresiva.
          3-Damos motor para comenzar la cuenta
          4-Mostramos el documento
Semantica: Otra forma de expresar el script seria:

var contador = 0;  
while(contador < 10)  

     {
          contador++;
          document.write("<h2>numero:" + contador + "</h2 <br>");
}
  
}//FIN DE LA FUNCIÓN 
*/

//Esta OKEY