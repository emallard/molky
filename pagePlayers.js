

function pagePlayers() {

    document.body.innerHTML = `
    <div class="pagePlayers">
        <div id="players">
            
        </div>
        <button onclick="pagePlayers_onAddPlayer()">Add Player</button>
        <button onclick="pagePlayers_start()">Start</button>
    </div>
    `
}

function pagePlayers_onAddPlayer() {
    let playerName = prompt('Player Name ?');
    pagePlayers_addPlayer(playerName);
}

function pagePlayers_addPlayer(playerName) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('data-name', playerName);
    newDiv.innerHTML = `${playerName}`;
    document.getElementById('players').appendChild(newDiv);
}

function pagePlayers_start() {
    let playerDivs = [...document.getElementById('players').querySelectorAll('div')]
    players = [];
    for (div of playerDivs) {
        players.push({ name: div.getAttribute('data-name') });
    }
    shuffle(players);
    pageGame();
}