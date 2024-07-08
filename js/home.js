const h1DOM = document.querySelector('h1');
const btnDOM = document.querySelector('button');

function doSomethingSilly() {
    console.log('silly');
    h1DOM.textContent = 'Labas rytas!';
    h1DOM.style.color = `rgb(${rand()},${rand()},${rand()})`;
}
btnDOM.addEventListener('click', doSomethingSilly)

function rand() {
    return Math.floor(Math.random() * 256);
}

const minus1DOM = document.getElementById('minus1');
const minus2DOM = document.getElementById('minus2');
const minus3DOM = document.getElementById('minus3');
const plus1DOM = document.getElementById('plus1');
const plus2DOM = document.getElementById('plus2');
const plus3DOM = document.getElementById('plus3');
const team1DOM = document.getElementById('team1');
const team2DOM = document.getElementById('team2');
const historyDOM = document.getElementById('history');

minus1DOM.addEventListener('click', minusOne);
minus2DOM.addEventListener('click', minusTwo);
minus3DOM.addEventListener('click', minusThree);
plus1DOM.addEventListener('click', plusOne);
plus2DOM.addEventListener('click', plusTwo);
plus3DOM.addEventListener('click', plusThree);

function plusOne() {
    team1DOM.textContent = parseInt(team1DOM.textContent) + 1;
    historyDOM.innerHTML = `<p style="color:violet">Team one scored 1 point</p>` + historyDOM.innerHTML;
}
function minusOne() {
    team2DOM.innerText = parseInt(team2DOM.innerText) + 1;
    historyDOM.innerHTML = `<p style="color:blue">Team two scored 1 point</p>` + historyDOM.innerHTML;

}
function plusTwo() {
    team1DOM.textContent = parseInt(team1DOM.textContent) + 2;
    historyDOM.innerHTML = `<p style="color:violet">Team one scored 2 points</p>` + historyDOM.innerHTML;

}
function minusTwo() {
    team2DOM.innerText = parseInt(team2DOM.innerText) + 2;
    historyDOM.innerHTML = `<p style="color:blue">Team two scored 2 points</p>` + historyDOM.innerHTML;
}
function plusThree() {
    team1DOM.textContent = parseInt(team1DOM.textContent) + 3;
    historyDOM.innerHTML = `<p style="color:violet">Team one scored 3 point</p>` + historyDOM.innerHTML;

}
function minusThree() {
    team2DOM.innerText = parseInt(team2DOM.innerText) + 3;
    historyDOM.innerHTML = `<p style="color:blue">Team two scored 3 points</p>` + historyDOM.innerHTML;
}