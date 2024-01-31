let boks = []
let boksOut = document.getElementById("output")


function addBok() {
    let bok = {
        title: "",
        author: "",
        genre: "",
        year: 0
    };

    bok.title = document.getElementById("title").value
    bok.author = document.getElementById("author").value
    bok.genre = document.getElementById("genre").value
    bok.year = document.getElementById("year").value

    boks.push(bok);
    console.log(boks);

}



function deleteBok() {
    let whaDel = window.prompt("jakou knihu smazat?");

    boks.splice(whaDel, 1);
    console.log(boks);
}



function searchBok() {
    let whaSer = document.getElementById("searchBy").value

    if (document.getElementById("searchTitle").checked == true) {
        for (let i = 0; i < boks.length; i++) {
            if (whaSer == boks[i].title) {
                console.log(boks[i].title + " " + boks[i].author + " " + boks[i].genre + " " + boks[i].year)
            }
        }
    } else if (document.getElementById("searchAuthor").checked == true) {
        for (let i = 0; i < boks.length; i++) {
            if (whaSer == boks[i].author) {
                console.log(boks[i].title + " " + boks[i].author + " " + boks[i].genre + " " + boks[i].year)
            }
        }
    } else if (document.getElementById("searchGenre").checked == true) {
        for (let i = 0; i < boks.length; i++) {
            if (whaSer == boks[i].genre) {
                console.log(boks[i].title + " " + boks[i].author + " " + boks[i].genre + " " + boks[i].year)
            }
        }
    } else if (document.getElementById("searchYear").checked == true) {
        for (let i = 0; i < boks.length; i++) {
            if (whaSer == boks[i].year) {
                console.log(boks[i].title + " " + boks[i].author + " " + boks[i].genre + " " + boks[i].year)
            }
        }
    } else {
        alert("ty vis co")
    }
}

// ukázat všechny knihy (nefunguje)
/*
let showing = false;
let showed = document.getElementById("showed");

function showAll() {
    if (showing == false) {
        for (let i = 0; i < boks.length; i++) {
            let paragraph = document.createElement("p");
            paragraph.textContent = boks[i];
            showed.appendChild(paragraph);
        }
    } else {
        showed.innerHTML = " ";
    }

}
*/
