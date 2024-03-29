let cryptos = ["Bitcoin", "Ethereum", "Tether", "Binance", "Ripple", "Cardano", "Solana", "Polkadot", "Dogecoin", "Avalanche"]
let values = [
    "1,654,190.04 CZK | 65,430.29 EUR | 71,046.90",
    "123,456.78 CZK | 4,938.23 EUR | 5,378.90 USD",
    " 23.45 CZK | 0.93 EUR | 1. 01 USD",
    " 10,123.45 CZK | 402.34 EUR | 440.56 USD",
    " 9.87 CZK | 0.39 EUR | 0.43 USD",
    " 3.45 CZK | 0.14 EUR | 0.15 USD",
    " 87,65 CZK | 3,50 EUR | 3,82 USD",
    " 567,89 CZK | 22,78 EUR | 24,89 USD",
    " 2,34 CZK | 0,09 EUR | 0,10 USD",
    " 1 257.16 CZK | 53,72 EUR | 57,79 USD",
    " 23.45 CZK | 0.93 EUR | 1. 01 USD",
]

function find() {
    search = window.prompt("zadej jméno kryptoměny");

    if (search == "kos") {
        window.location.href = "https://www.youtube.com/watch?v=_vUTn7GXK5A"
    } else if (search == "" || search == " ") {
        alert("brmbilibrm")
    } else {
        for (let i = 0; i <= cryptos.length; i++) {
            if (search == cryptos[i]) {
                document.getElementById("findo").innerHTML = (search + ":" + " " +values[i]);
            }
        }
    }
}