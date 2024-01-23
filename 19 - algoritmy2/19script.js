const produkty = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Lepidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
];

function renderProdukty() {
    const produktyList = document.getElementById('produkty-list');
    produktyList.innerHTML = '';

    produkty.forEach(produkt => {
        const produktItem = document.createElement('div');
        produktItem.innerHTML = `<strong>${produkt.nazev}</strong> - Cena: ${produkt.cenaZaKus} Kč, Množství: ${produkt.pocetNaSklade}`;
        produktyList.appendChild(produktItem);
    });
}

function nejdrazsiProdukt() {
    const nejdrazsiProdukt = produkty.reduce((max, produkt) => (produkt.cenaZaKus > max.cenaZaKus) ? produkt : max, produkty[0]);
    alert(`Nejdražší produkt je: ${nejdrazsiProdukt.nazev} s cenou ${nejdrazsiProdukt.cenaZaKus} Kč.`);
}

function filtrujPodleMnozstvi() {
    const hraniceMnozstvi = parseInt(document.getElementById('filtr-mnozstvi').value, 10);
    const filtrovaneProdukty = produkty.filter(produkt => produkt.pocetNaSklade < hraniceMnozstvi);
    alert(`Produkty s méně než ${hraniceMnozstvi} kusy na skladě:\n${filtrovaneProdukty.map(p => p.nazev).join(', ')}`);
}

function spocitejCelkovouHodnotu() {
    const celkovaHodnota = produkty.reduce((total, produkt) => total + (produkt.cenaZaKus * produkt.pocetNaSklade), 0);
    alert(`Celková hodnota zásob je: ${celkovaHodnota} Kč.`);
}

function aktualizujPocetProduktu() {
    const nazevProduktu = prompt('Zadejte název produktu, u kterého chcete aktualizovat počet kusů:');
    const produkt = produkty.find(p => p.nazev.toLowerCase() === nazevProduktu.toLowerCase());

    if (produkt) {
        const novyPocet = parseInt(document.getElementById('aktualizace-produktu').value, 10);
        produkt.pocetNaSklade = novyPocet;
        renderProdukty();
        alert(`Pocet kusů pro produkt ${produkt.nazev} byl aktualizován na ${novyPocet}.`);
    } else {
        alert(`Produkt s názvem ${nazevProduktu} nebyl nalezen.`);
    }
}

window.onload = () => {
    renderProdukty();
};