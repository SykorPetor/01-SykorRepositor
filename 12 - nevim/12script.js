const quotes = ["Není hodně otázek, jen málo odpovědí. - já (doufám)",
    "Kamo kys. - já",
    "Cokoli slyšíme, je názor, nikoli fakt. Cokoli vidíme, je úhel pohledu, nikoli pravda.",
    "Život je jako jízda na kole. Abyste udrželi balanc, musíte se neustále pohybovat dopředu.",
    "Kdo se nebojí života, nebojí se ani smrti.",
    "Nejlepší pomstou je nebýt jako ten, který vás zranil.",
    "Skutečným cílem války je mír.",
    "Buď tak silný, abys byl něžný",
    "Jedna spravedlnost je mocnější než tisíc zbraní.",
    "Abys poznal svého nepřítele, musíš se stát vlastním nepřítelem.",
    "To je život. - Eliáš"
]

let oneQuote = ""

function randomQuote() {

    let rand = Math.floor(Math.random() * 11);

    oneQuote = (quotes[rand]);

    document.getElementById("quoteHere").innerHTML = oneQuote;

    oneQuote = ""
}