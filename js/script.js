// CONSEGNA

// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.


// BONUS:
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

// --------------------------------------



// Creo le bombe (array di 16 numeri non duplicati compresi tra 1 e squareQuantity)
// Cacolo il numero massimo di tentativi dopo il quale l'utente ha vinto (squareQuantity - lunghezza array bombe, quindi 16)
// creo un array vuoto che contiene i numeri non bombe che l'utente ha preso al click



// --------------------------------------


let userChoice = '';
document.getElementById("play-button").addEventListener('click', game);

function game() {
    // prendo la scelta di difficoltà dell'utente
    userChoice = document.querySelector('.choice-list').value;
    const grid = document.querySelector('.grid');
    grid.classList.remove('hidden');
    grid.innerHTML = '';

    const gameTitle = document.getElementById("game-title")
    gameTitle.classList.add('hidden');

    // Scelgo la quantità di square e la loro grandezza 
    // in base alla scelta dell'utente
    let squareSize = '';
    let squareQuantity = 0;
    if (userChoice == 'easy') {
        squareSize = 'calc(100% / 10)';
        squareQuantity = 100;

    } else if (userChoice == 'hard') {
        squareSize = 'calc(100% / 9)';
        squareQuantity = 81;


    } else if (userChoice == 'crazy') {
        squareSize = 'calc(100% / 7)';
        squareQuantity = 49;
        
    }

    // Genero 16 bombe
    // const bombsArray = [];

    // Creo un elemento e un numero per ogni square
    for (let i = 1; i <= squareQuantity; i++) {
        let thisElement = i;

        // Creo il tag div con dentro l'elemento square
        const newBox= document.createElement('div');
        newBox.classList.add('square');

        // Do' la grandezza in base alla scelta (difficoltà)
        newBox.style.width = squareSize;
        newBox.style.height = squareSize;

        // Inserisco il numero dentro lo square
        newBox.innerHTML = `
        <span>${thisElement}</span>
        `
        // Aggiungo gli square nella griglia
        grid.appendChild(newBox);

        // Aggiungo la classe del colore al click
        newBox.addEventListener('click', handleCellClick);
    }


}
// FUNCTION
function handleCellClick() {
    // Al click dello square aggiungo la class del colore
    this.classList.add('bkg-cyan');
}

//  Genera un array di bombe
// maxBombRange = al numero di bombe () ad esempio da 1 a 100
// numberOfBombs = numero di bombe da generare
// return: array completo con le bombe
function generateBombs(maxBombRange, numberOfBombs) {
    const bombsArray = [];
    while( bombsArray.length < numberOfBombs ) {
        const randomNumber = getRndInteger(1, maxBombRange);

        if(!bombsArray.includes(randomNumber)) {
            bombsArray.push(randomNumber);
        }
    }

    console.log(bombsArray)
}

let test = generateBombs(100, 16);



// Questa funzione serve a generare numeri casuali da un min a un max 
// (tutti e due compresi) che diamo noi come argomento.
// return: ci fornisce un numero
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}