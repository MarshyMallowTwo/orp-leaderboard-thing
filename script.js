window.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const infoBox = document.getElementById("infoBox");
    const obbyButton = document.getElementById("obbyButton");
    const playerButton = document.getElementById("playerButton");

    function resetInfo() {
        infoBox.innerHTML = `
            <div class="info-header">
                <h2 class="main-title">select something dumbass</h2>
                <p id="splashtext"></p>
            </div>
        `;

        const splash = document.getElementById("splashtext");
        if (splash) {
            splash.textContent = getWeightedSplash();
        }
    }

    function renderObbies() {
        sidebar.innerHTML = "";

        [...obbies]
            .sort((a, b) => b.difficulty.value - a.difficulty.value)
            .forEach((obby, index) => {
                const item = document.createElement("div");
                item.className = "item";

                const rank = index + 1;
                const difficultyColor = difficulties[obby.difficulty.name] || "#FFFFFF";
                const qualityBase = obby.quality.replace("+", "").replace("-", "");
                const qualityColor = qualities[qualityBase] || "#FFFFFF";

                item.innerHTML = `
                    <span class="rank" style="color:${difficultyColor}">#${rank}</span>
                    <span class="name">${obby.name}</span>
                    <span class="value" style="color:${difficultyColor}">${obby.difficulty.value.toFixed(2)}</span>
                `;

                item.style.borderLeft = `6px solid ${difficultyColor}`;

                item.addEventListener("click", () => {
                    infoBox.innerHTML = `
                        <div class="info-title">${obby.name}</div>

                        <div class="info-stats">
                            <div class="stat">
                                <span class="label">Rank</span>
                                <span class="value">#${rank}</span>
                            </div>

                            <div class="stat">
                                <span class="label">Difficulty</span>
                                <span class="value">
                                    <span style="color:${difficultyColor}">${obby.difficulty.name}</span>
                                    <span> (${obby.difficulty.value.toFixed(2)})</span>
                                </span>
                            </div>

                            <div class="stat">
                                <span class="label">Quality</span>
                                <span class="quality-badge" style="color:${qualityColor};">${obby.quality}</span>
                            </div>

                            <div class="stat">
                                <span class="label">Creator</span>
                                <span class="value">${obby.creator}</span>
                            </div>
                        </div>
                    `;
                });

                sidebar.appendChild(item);
            });

        resetInfo();
    }

    function renderPlayers() {
        sidebar.innerHTML = "";

        [...players]
            .sort((a, b) => b.difficulty.value - a.difficulty.value)
            .forEach((player, index) => {
                const item = document.createElement("div");
                item.className = "item";

                const rank = index + 1;
                const difficultyColor = difficulties[player.difficulty.name] || "#FFFFFF";

                item.innerHTML = `
                    <span class="rank" style="color:${difficultyColor}">#${rank}</span>
                    <span class="name">${player.name}</span>
                    <span class="value" style="color:${difficultyColor}">${player.difficulty.value.toFixed(2)}</span>
                `;

                item.style.borderLeft = `6px solid ${difficultyColor}`;

                item.addEventListener("click", () => {
                    const hardestObby = player.hardest && typeof player.hardest === "object" ? player.hardest : null;
                    const hardestName = hardestObby ? hardestObby.name : player.hardest;
                    const hardestDifficultyName = hardestObby ? hardestObby.difficulty.name : player.difficulty.name;
                    const hardestDifficultyValue = hardestObby ? hardestObby.difficulty.value : player.difficulty.value;
                    const hardestColor = difficulties[hardestDifficultyName] || "#FFFFFF";

                    infoBox.innerHTML = `
                        <div class="info-title">${player.name}</div>

                        <div class="info-stats">
                            <div class="stat">
                                <span class="label">Rank</span>
                                <span class="value">#${rank}</span>
                            </div>

                            <div class="stat">
                                <span class="label">Hardest</span>
                                <span class="value">
                                    <span style="color:${hardestColor}">${hardestName}</span>
                                    <span> (${hardestDifficultyValue.toFixed(2)})</span>
                                </span>
                            </div>
                        </div>
                    `;
                });

                sidebar.appendChild(item);
            });

        resetInfo();
    }

    obbyButton.addEventListener("click", renderObbies);
    playerButton.addEventListener("click", renderPlayers);

    renderObbies();
});