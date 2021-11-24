// CONSEGNA

// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// --------------------------------------

let userChoice = '';
document.getElementById("play-button").addEventListener("click", function() {
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

    // Creo unnumero per ogni square
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
        newBox.addEventListener('click', function(){
            newBox.classList.add('bkg-cyan');
        })
    }


});
// FUNCTION



// ORA NON SERVE

// Questa funzione serve a generare numeri casuali da un min a un max 
// (tutti e due compresi) che diamo noi come argomento.
// return: ci fornisce un numero
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}