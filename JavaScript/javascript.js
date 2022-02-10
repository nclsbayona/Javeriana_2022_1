//debugger;

console.log("Hola desde la consola.");
//alert("hola desde el archivo javascript");

var numero = 0.6;
console.log("numero",numero);

var suma = numero + 1; 
console.log("suma numero",suma);

numero = "0.7";
console.log("string",numero);
suma = numero + 1;
console.log("suma numero",suma);

var varBoolean = true;
varBoolean = false;

var varNull = null;
console.log("nulo",  varNull);

var varUndefined;
console.log("undf", varUndefined);

var varNan = "hola" * 5;
console.log("nan", varNan);

var arreglo = ["pera", "manzana", "mandarina"];
console.log("posicion 0: ", arreglo[0]);
console.log("largo arreglo: ", arreglo.length);
console.log("concatenado: ", arreglo.join(";"));

var estudiante = {
    nombre : "Pedro",
    edad: 32,
    casado: true,
    hobbies: ["nadar", "bailar"],
    direccion: 
    {
        calle: 7,
        avenida: "Gaitan"
    }
};

console.log("estudiante", estudiante.nombre);
console.log("estudiante-calle", estudiante.direccion.calle);
console.log("concatenacion", estudiante.nombre + " - " +  estudiante.direccion.calle);


if(estudiante.casado == true)
{
    console.log("El estudiante es casado");
}else
{
    console.log("El estudiante NO ES CASADO");
}

if(estudiante.edad === 32)
{
    console.log("El estudiante tiene 32 años");
}else
{
    console.log("El estudiante NO TIENE 32 AÑOS");
}

var opcion = 3;
switch(opcion)
{
    case 1:
        console.log("La opcion es 1");
        break;
    case 2:
        console.log("La opcion es 2");
        break;
    case 3:
        console.log("La opcion es 3");
        break;
}

var i = 0;
while(i < 3)
{
    console.log("valor: ", i);
    i++;
} 

for (var k = 0; k <= 10; k++)
{
    console.log("valor for: " , k)
}


function Saludar(nombre)
{
    alert("Hola desde funcion: " + nombre);
}

function Controlar(elemanto)
{
    debugger;
    elemanto.innerHTML = "cambiar";
    //alert("Hola desde funcion: " + nombre);
}


function SaludarDesdeControl()
{
    
    var txtnombre = document.getElementById("txt-nombre");
    var lblnombre =document.getElementById("lbl-nombre");
    
    if (lblnombre.style.color == "red") {
        lblnombre.style.color ="green";
    }else
    {
        lblnombre.style.color ="red";
    }
    
    lblnombre.textContent = txtnombre.value;

    debugger;
    txtnombre.setAttribute("required", "");
    txtnombre.removeAttribute("required", "");
}

// Saludar();