const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['sword', 'whip'],
    attack: function(fight) {
        console.log(this.name + 'Fight...');
    },
};

const player2 = {
    player: 2,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['fist', 'slime'],
    attack: function(fight) {
        console.log(this.name + 'Fight...');
    },
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) $tag.classList.add(className);
    return $tag;
}

function createPlayer(player) {
    const $player = createElement('div', 'player' + player.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');

    const $img = document.createElement('img');

    $img.src = player.img;
    $life.style.width = player.hp + '%';
    $name.innerText = player.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    console.log(player.hp);
    if (player.hp <= 0) {
        player.hp = 0;
        $randomButton.disabled = true;
        if (player.player == 1) {
            $arenas.appendChild(playerWin(player2.name));
        } else {
            $arenas.appendChild(playerWin(player1.name));
        }
    }
    $playerLife.style.width = player.hp + '%';
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = name + '  WIN!!!';
    return $winTitle;
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';
    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));