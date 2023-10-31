function addNums() {

    let startNum = parseInt(document.getElementById("addNum").value)

    let outNum = 0

    for (let i = 0; i <= startNum; i++) {
        outNum = outNum + i
    }

    document.getElementById("outNum").value = outNum

}

//----------------------------------------------------

function minNums() {

    let startNum = parseInt(document.getElementById("addNum").value)

    let outNum = 0

    for (let i = 0; i <= startNum; i++) {
        outNum = outNum - i
    }

    document.getElementById("outNum").value = outNum

}

function timNums() {

    let startNum = parseInt(document.getElementById("addNum").value)

    let outNum = 1

    for (let i = 1; i <= startNum; i++) {
        outNum = outNum * i
    }

    document.getElementById("outNum").value = outNum

}



function addOddNums() {

    let oddNums = parseInt(document.getElementById("addOddNum").value)

    let outOddNums = 0

    for (let i = 0; i <= oddNums; i++) {

        outOddNums = outOddNums + i

    }

    document.getElementById("outOddNum").value = outOddNums

}