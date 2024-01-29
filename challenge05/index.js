import axios from "axios";

let texto = [];

async function getText() {
    try {
        let response = await axios.get(
            "https://codember.dev/data/database_attacked.txt"
        );
        texto = response.data.split('\n');
    } catch (error) {
        console.log(error);
    }
    separateValues(texto);
    // console.log(texto);
}
getText();
function separateValues(array) {
    let hiddenMessage = '';
    for (let i = 0; i < array.length; i++) {
        const usuario = array[i];
        const [id, username, email, age, location] = usuario.split(',');
        // console.log(`ID: ${id}, USERNAME: ${username}, EMAIL: ${email}, AGE: ${age}, LOCATION: ${location}`);
        //console.log(usuario, i);
        checkID(id);
        checkUsername(username);
        checkEmail(email);
        checkAge(age);
        checkLocation(location);
        if (!checkID(id) || !checkUsername(username) || !checkEmail(email) || !checkAge(age) || !checkLocation(location)) {
            hiddenMessage += username[0];
        }
    }
    return console.log(hiddenMessage);
}

function checkID(id) {
    return /^[a-zA-Z0-9]+$/.test(id);
}
function checkUsername(username) {
    return /^[a-zA-Z0-9]+$/.test(username);
}

function checkEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkAge(age) {
    if (age === undefined || age === '' || (!isNaN(age) && typeof age !== 'boolean')) {
        return true;
    } else {
        return false;
    }
}

function checkLocation(location) {
    if (location === undefined || location === '' || typeof location === 'string') {
        return true;
    } else {
        return false;
    }
}