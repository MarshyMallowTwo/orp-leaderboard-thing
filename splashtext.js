const splashTexts = [
    {text: "CLICK SOME RANDOM OBBY BRO PLEASE", weight: 7},
    {text: "skill issue", weight: 6.5},
    {text: "why are you still here", weight: 5.75},
    {text: "touch grass", weight: 4.5},
    {text: "new top 1 just dropped", weight: 4.25},
    {text: "tung tung tung sahur", weight: 1.25},
    {text: "ungtay ungtay ungtay ahursay", weight: 1},
    {text: "go and play orp rn or else", weight: 0.75},
    {text: "all roads lead to Sh4ng's Demise being top 1", weight: 0.001},
    {text: "This is the rarest splashtext btw", weight: 0.0000000000001}
];

function getWeightedSplash() {
    let totalWeight = splashTexts.reduce((sum, item) => sum + item.weight, 0);

    let random = Math.random() * totalWeight;

    for (let item of splashTexts) {
        if (random < item.weight) {
            return item.text;
        }
        random -= item.weight;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splashtext");
    splash.textContent = getWeightedSplash();
})