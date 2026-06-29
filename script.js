window.addEventListener("DOMContentLoaded", () => {
const sidebar = document.getElementById("sidebar");
const infoBox = document.getElementById("infoBox");

obbies.sort((a, b) => {
    return b.difficulty.value - a.difficulty.value;
});

obbies.forEach((obby, index) => {
    const item = document.createElement("div");
    item.className = "item";

    const rank = index + 1;
    const difficultyColor = difficulties[obby.difficulty.name] || "#FFFFFF";
    const qualityBase = obby.quality.replace("+", "").replace("-", "")
    const qualityColor = qualities[qualityBase] || "#FFFFFF";

    item.innerHTML = `
    <span class="rank" style="color:${difficultyColor}">#${rank}</span>
    <span class="name">${obby.name}</span>
    <span class="value" style="color:${difficultyColor}">${obby.difficulty.value.toFixed(2)}</span>
`;

    item.style.borderleft = `6px solid ${difficultyColor}`;

    item.addEventListener("click", () => {
    infoBox.innerHTML = `
    <div class="info-title">
    ${obby.name}
    </div>

    <div class="info-stats">

    <div class="stat">
    <span class="label">Rank</span>
    <span class="value">#${rank}</span>
    </div>

    <div class="stat">
    <span class="label">Difficulty</span>

    <span class="value">
    <span style="color:${difficultyColor}">
    ${obby.difficulty.name} 
    </span>
    <span>
    (${obby.difficulty.value.toFixed(2)})
    </span>
    </div>

    <div class="stat">
    <span class="label">Quality</span>

    <span
    class="quality-badge"
    style="
    color:${qualityColor};
    "
    >
    ${obby.quality}
    </span>
    </div>

    <div class="stat">
    <span class="label">Creator</span>
    <span class="value">${obby.creator}</span>
    </div>
    `;
});

    sidebar.appendChild(item);
});
});