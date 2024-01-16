
import axios from 'axios'

let splitRes = [];

async function getText() {
    try {
        let response = await axios.get('https://codember.dev/data/files_quarantine.txt');
        // splitRes = response.data.split('\n').toString();
        splitRes = response.data.split('\n');
        //console.log(splitRes);
    }
    catch (error) {
        console.log(error);
    }
}
getText().then(() => {
    let providedChecksumList = [];
    for (let i = 0; i < splitRes.length; i++) {
        let [chain, providedChecksum] = splitRes[i].split('-');
        providedChecksumList.push(providedChecksum);
        let calculatedChecksum = calculateChecksum(chain);
        if (providedChecksum == calculatedChecksum) {
            // console.log(`✅ Real (El checksum es válido) - ${chain}`)
        } else {
            //console.log(`❌ Falso (El checksum es incorrecto) - ${chain}`)
        }
    }
    return console.log(`El archivo real número 33° en orden de aparición dentro de los verdaderos es "${providedChecksumList[32]}"`);
})

function calculateChecksum(cadena) {
    let contadorLetras = {};
    let checksum = '';

    for (let j = 0; j < cadena.length; j++) {
        let letra = cadena[j];
        if (!contadorLetras[letra]) {
            contadorLetras[letra] = true;
            checksum += letra;
        }
    }
    console.log(contadorLetras);
    return checksum;
}