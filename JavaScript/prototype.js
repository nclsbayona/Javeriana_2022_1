var persona1 = new Persona("wilmer", "111111");
var persona2 = new Persona("juan", "22222");

function SaludarDesdeHtml() {
    persona2.nombre = "Carlos";
    persona1.saludar();
    persona2.saludar();
}

