function calcularEdad(fechaNacimiento: string): number {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();

    const mesActual = hoy.getMonth();
    const mesNacimiento = fechaNacimientoDate.getMonth();


    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    return edad;
}

const fechaNacimiento = '1995-05-30';
const edad = calcularEdad(fechaNacimiento);
console.log(`La edad es: ${edad}`);
