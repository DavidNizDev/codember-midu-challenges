
let aCompilar = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

function compiladorEspionaje(text) {
    let contador = 0;
    let resultado = [];
    // now we have to join the array
    let texto = text.split("");
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "#") {
            contador++;
        } if (texto[i] === "@") {
            contador--;
        } if (texto[i] === "*") {
            contador = contador * contador;
        } if (texto[i] === "&") {
            resultado.push(contador);
        }
    }
    let joinRes = resultado.join("");
    return console.log(joinRes);
}
compiladorEspionaje(aCompilar)
