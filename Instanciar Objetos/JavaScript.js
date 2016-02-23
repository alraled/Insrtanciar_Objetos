// OPCION 1 //

var alumno1 = new Object();
alumno1.nombre = "Alvaro"
alumno1.apellidos = "Ramiro"
alumno1.edad = 26;
alumno1.nota = 8;

// OPCION 2 //

var alumno2 = {
    nombre: "Alvaro",
    apellidos: "Ramiro",
    edad: 26,
    nota: 7
};

// OTRA OPCION //

function Persona(nombre, apellido, edad) {
    this.nombre = nombre || "";
    this.apellido = apellido || "";
    this.edad = edad || 0;
    this.crecer = function () {
        console.log("Estoy creciendo");
    }
}

function Alumno(nombre, apellido, edad, nota) {
    this.nombre = nombre || "";
    this.apellido = apellido || "";
    this.edad = edad || 0;
    this.nota = nota || 0;

    this.getNotaTexto = function () {
        if (this.nota < 5)
            return "Suspenso";
        else
        return "Aprobado";
    }

}

Alumno.prototype = new Persona;
Alumno.prototype.constructor = Alumno;

var alumno3 = new Alumno("Eva", "Domínguez", 30, 9);
var alumno4 = new Alumno("María", "Pérez", 21);

// CREAR UN ALERT CON LA NOTA DEL ALUMNO"

alert(alumno3.getNotaTexto());

// CREAR UN PROTOTYPE //

Alumno.prototype.saludar = function () {
    alert("Hola " + this.nombre + "¡¡¡Bienvenido!!!");
}

alumno3.saludar();

String.prototype.toUpperCase = function () {
    return "Hola don Pepito";
}