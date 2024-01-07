function aggiornamentoTitolo() {
    let h1Modificato = document.querySelector('h1');
    if (h1Modificato) {
        h1Modificato.textContent = 'Nome negozio aggiornato';
    }
}
aggiornamentoTitolo();

function aggiornamentoBackground() {
    let backBod = document.querySelector('body');
    if (backBod) {
        backBod.style.backgroundColor = 'lightblue';
    }
}
aggiornamentoBackground();

function nuovoIndirizzo() {
    let newAddr = document.getElementById('address');
    if (newAddr) {
        newAddr.textContent = 'Via Degli Albani 18, 34534, Minnesota';
    }
}
nuovoIndirizzo();

var linkAmazon = document.querySelectorAll('a');
linkAmazon.forEach(function(linkCollegamento) {
    linkCollegamento.classList.add('classeLink');
    linkCollegamento.style.fontFamily = 'NuovoFont, Arial, sans-serif';
});
// queste 2 ultime consegne non appaiono su schermo e non danno messaggi di errore in console, non riesco a venirne a capo, potreste scrivermi il perchè non funziona? Grazie mille
const toggleImagesClass = function () {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.classList.toggle('hidden');
    });
};

function cambiaColorePrezzi() {
    const prezzi = document.querySelectorAll('.price');
    prezzi.forEach(function(prezzo) {
        const coloreCasuale = getRandomColor();
        prezzo.style.color = coloreCasuale;
    });
}

function getRandomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}