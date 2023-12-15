// get the text from https://codember.dev/data/message_01.txt and save the text in a variable
import axios from "axios";
let texto = "";
async function getText() {
    try {
        let response = await axios.get(
            "https://codember.dev/data/message_01.txt"
        );
        texto = response.data;
        getWords(texto);
    } catch (error) {
        console.log(error);
    }
}
function getWords(text) {
    // first we split the text into words, transforming it into lowercase.
    let wordsArray = text.toLowerCase().split(" ");
    // now we should count the repetitions of each word
    let wordsRepetitions = {};
    for (let word of wordsArray) {
        if (wordsRepetitions[word]) {
            wordsRepetitions[word] += 1;
        } else {
            wordsRepetitions[word] = 1;
        }
    }
    // now we should join the words again without commas or spaces
    let allTogether = "";
    for (let word in wordsRepetitions) {
        allTogether += word + wordsRepetitions[word];
    }
    return console.log(allTogether);
}
getText();



