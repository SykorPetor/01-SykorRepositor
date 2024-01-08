function loginFun() {

    const database = ["pepik.ahoj1", "jana.pizza2", "karel.kočka3", "eva.12345"];

    let username = document.getElementById("loginUsername").value
    let password = document.getElementById("loginPassword").value

    let loginInfo = username + "." + password;
    console.log(loginInfo);

    for (let i = 0; i < database.length; i++) {
        if (loginInfo === database[i]) {
            document.getElementById("loginText").innerHTML = "přihlášen";
            window.location.href = "16prihl.html";
            return;
        }
    }
    document.getElementById("loginText").innerHTML = "špatné username nebo heslo";
}