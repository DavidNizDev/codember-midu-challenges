import axios from "axios";

let lines = [];

async function getText() {
    try {
        let response = await axios.get(
            "https://codember.dev/data/encryption_policies.txt"
        );
        lines = (response.data).split("\n");
    } catch (error) {
        console.log(error);
    }
    // console.log(lines);
}
getText().then(() => {
    let valid = [];
    let nonValid = [];
    
    for (let i = 0; i < lines.length; i++) {
        let [policy, password] = lines[i].split(": ");
        let [numMin, numMax] = policy.split(" ")[0].split("-").map(Number);
        let letter = policy.split(" ")[1];

        let count = 0;
        for (let j = 0; j < password.length; j++) {
            if (password[j] === letter) {
                count++;
            }
        }
        if (count >= numMin && count <= numMax) {
            valid.push(password);
        } else {
            nonValid.push(password);
        }
    }
    console.log(`La palabra inválida numero 43° en orden de aparicion es: ${nonValid[41]}`);
})
