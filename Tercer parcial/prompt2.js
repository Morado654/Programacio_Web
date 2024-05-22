function multi() {
    var num = prompt('Ingresa un numero(1-10)', '');
    num = parseInt(num);

    // Limpiar el contenido del body
    document.body.innerHTML = '';

    // Aplicar el fondo degradado
    document.body.className = 'gradient-background';

    // Crear un nuevo contenedor para las multiplicaciones
    var container = document.createElement('div');
    container.className = 'result-container';
    document.body.appendChild(container);

    // Generar la tabla de multiplicar
    for (var x = 1; x <= 10; x++) {
        var tabla = num * x;
        var result = document.createElement('div');
        result.className = 'result';
        result.textContent = `${num} x ${x} = ${tabla}`;
        container.appendChild(result);
    }
}