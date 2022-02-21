function Persona(nombre, cedula) {
    this.nombre = nombre;
    this.cedula = cedula;
}

Persona.prototype.saludar = function () {
    alert("Hola:" + this.nombre );
}
