function numberFn() {

    const ourNum = parseFloat(document.getElementById("ourNum").value)

    if (ourNum <= 0) {
        console.log("záporné číslo")
    } else if (outNum > 0 && ourNum <= 10) {
        console.log("větší než 0")
    } else if (ourNum > 10 && ourNum < 20) {
        console.log("větší než 10")
    } else {
        console.log("větší než 20")
    }

}


function ageFunction() {

    const age = parseInt(document.getElementById("userAge").value)

    if (age <= 0) {
        console.log("nežiješ")
    } else if (age > 0 && age <= 15) {
        console.log("jsi dítě XD bozo")
    } else if (age > 15 && age < 18) {
        console.log("jsi mladistvý")
    } else {
        console.log("jsi dospělý")
    }

}

function yearFunction() {

    const yearAge = parseInt(document.getElementById("birthYear").value)

    const yearAgeNum = 2023 - yearAge

    console.log(yearAgeNum)
}





function ageYearFun() {

    const ageOrYear = parseInt(document.getElementById("ageYearNum").value)

    console.log(ageOrYear)

    if (ageOrYear > 1900) {

        const ageFromThird = 2023 - ageOrYear

        if (ageFromThird <= 0) {
            document.getElementById("hlaskyOVeku").value = "neni mozny"
        } else if (ageFromThird > 0 && ageFromThird < 15) {
            document.getElementById("hlaskyOVeku").value = "dite XD"
        } else if (ageFromThird >= 15 && ageFromThird < 18) {
            document.getElementById("hlaskyOVeku").value = "mladistvy Oukejj"
        } else if (ageFromThird >= 18) {
            document.getElementById("hlaskyOVeku").value = "dospelyyyyy"
        }

    } else if (ageOrYear < 123) {

        const ageFromThird = ageOrYear

        if (ageFromThird <= 0) {
            document.getElementById("hlaskyOVeku").value = "neni mozny"
        } else if (ageFromThird > 0 && ageFromThird < 15) {
            document.getElementById("hlaskyOVeku").value = "dite XD"
        } else if (ageFromThird >= 15 && ageFromThird < 18) {
            document.getElementById("hlaskyOVeku").value = "mladistvy Oukejj"
        } else if (ageFromThird >= 18) {
            document.getElementById("hlaskyOVeku").value = "dospelyyyyy"
        }

    }

}