function calcularEdad(fechaNacimiento) {
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    var mesActual = hoy.getMonth();
    var mesNacimiento = fechaNacimientoDate.getMonth();
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }
    return edad;
}
var fechaNacimiento = '1995-05-30';
var edad = calcularEdad(fechaNacimiento);
console.log("La edad es: ".concat(edad));
