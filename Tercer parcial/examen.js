function palindromo(cadena) {
    var resultado = "La frase \"" + cadena + "\" \n";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var iguales = true;
    for (var i in letras) {
        if (letras[i] == letrasReves[i]) {

        } else {
            iguales = false;
        }
    }
    if (iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }
    return resultado;
}

function evaluarPalindromo() {
    var cad = document.getElementById("frase").value;
    var resultado = palindromo(cad);
    document.getElementById("resultado").textContent = resultado;
}
