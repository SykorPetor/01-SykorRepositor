const xValues = ["Nic", "Kolo", "Posilovna", "Běh"];
const yValues = [2 * 7, 2 * 7, 1 * 7, 2 * 7];
const barColors = [
    "#ff0000",
    "#00ff00",
    "#ff9900",
    "#0000ff"
];

new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Procento aktivit v týdnu"
        }
    }
});