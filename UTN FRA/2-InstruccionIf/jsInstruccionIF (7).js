function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value;
var estadoCivil=document.getElementById('estadoCivil').value;

if(edad<18&&estadoCivil!="Soltero")
{
	alert("Es muy pequeño para no ser soltero");
}
else
{
	if(edad<18)
	{
		alert ("Usted es "+ estadoCivil);
    }
    else
    
    if(edad>=18)
    {
		alert("Usted es "+estadoCivil);
    }

}
}//FIN DE LA FUNCIÓN

//Esta OKEY