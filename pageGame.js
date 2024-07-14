

function pageGame() {
    document.body.innerHTML = `
        <div class="pageGame">
            ${players.map(x => `
                <div class="playerListItem" data-name="${x.name}">
                    ${x.name} 
                    <div class="score">0</div>
                    <div class="scoreList"></div>
                </div>`).join('')}

            <div class="buttons">
                <div class="row2">
                    <button onclick="pageGame_addPoints(0)">0</button>
                </div>
                <div class="rowGrid">
                    <button onclick="pageGame_addPoints(1)">1</button>
                    <button onclick="pageGame_addPoints(2)">2</button>
                    <button onclick="pageGame_addPoints(3)">3</button>
                    <button onclick="pageGame_addPoints(4)">4</button>
                    <button onclick="pageGame_addPoints(5)">5</button>
                    <button onclick="pageGame_addPoints(6)">6</button>
                </div>
                <div class="rowGrid">
                    <button onclick="pageGame_addPoints(7)">7</button>
                    <button onclick="pageGame_addPoints(8)">8</button>
                    <button onclick="pageGame_addPoints(9)">9</button>
                    <button onclick="pageGame_addPoints(10)">10</button>
                    <button onclick="pageGame_addPoints(11)">11</button>
                    <button onclick="pageGame_addPoints(12)">12</button>
                </div>
                <div class="row2">
                    <button onclick="pageGame_notHere()">Is not here</button>
                    <button onclick="pageGame_notHere()">Is having a beer</button>
                    <button onclick="pageGame_notHere()">Is feeding the dog</button>
                </div>
            </div>
        </div>

    `

    players.forEach(x => x.score = 0);
    currentPlayerIndex = -1;
    pageGame_nextPlayer();
}

function pageGame_nextPlayer() {
    unselectCurrentPlayer();

    currentPlayerIndex = currentPlayerIndex + 1;
    currentPlayerIndex = currentPlayerIndex % players.length;

    let currentPlayerName = players[currentPlayerIndex].name;
    let playerListItem = document.querySelector(`[data-name="${currentPlayerName}"]`);
    playerListItem.classList.add('current');
}

function unselectCurrentPlayer() {
    if (currentPlayerIndex == -1)
        return;
    let currentPlayerName = players[currentPlayerIndex].name;
    let playerListItem = document.querySelector(`[data-name="${currentPlayerName}"]`);
    playerListItem.classList.remove('current');
}

function pageGame_addPoints(points) {
    players[currentPlayerIndex].score += points;
    let currentPlayerName = players[currentPlayerIndex].name;

    let playerListItem = document.querySelector(`[data-name="${currentPlayerName}"]`);
    let playerScore = playerListItem.querySelector('.score');
    playerScore.innerHTML = players[currentPlayerIndex].score;

    let playerScoreList = playerListItem.querySelector('.scoreList');
    console.log(playerScoreList.InnerHtml);
    playerScoreList.innerHTML += ` ${points}`;

    pageGame_nextPlayer();
}