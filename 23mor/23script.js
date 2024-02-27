alert("Z části jsem musel použít chatGPT na převod morse-text, program automaticky rospozná jestli chcete převod morse-text nebo opačně")

let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let morset = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----."]

function mor() {
    document.getElementById("to").innerHTML = ""
    let from = document.getElementById("from").value.toUpperCase()

    if (from[0] == "." || from[0] == "-") {
        let idk = morseToText(from)
        document.getElementById("to").innerHTML += idk
    }  else {
        for (let j = 0; j < from.length; j++) {
            for (let i = 0; i < letters.length; i++) {
                if (from[j] == letters[i]) {
                    document.getElementById("to").innerHTML += morset[i] + " "
                }
            }
        }
    }
}

function morseToText(morseCode) {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let morset = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----'];
    
    const words = morseCode.trim().split(" ");
    let text = "";
    for (let word of words) {
        const index = morset.indexOf(word);
        if (index !== -1) {
            text += letters[index];
        } else {
            text += "";
        }
    }
    return text;
}
