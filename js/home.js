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

////////////////////////////////////////////////////

const btnsDOM = document.querySelectorAll('.points > button');
const historyDOM = document.getElementById('history');
const team1DOM = document.getElementById('team1');
const team2DOM = document.getElementById('team2');

let scoreData = [];
const localData = localStorage.getItem('scores');
if (localData !== null) {
    scoreData = JSON.parse(localData);
    history();
    countPoints();
}

btnsDOM[2].addEventListener('click', () => {
    scoreData.push({
        team: 'one',
        points: 1,
        color: 'blue',
        time: Date.now(),
    })
    history();
    countPoints();
});
btnsDOM[1].addEventListener('click', () => {
    scoreData.push({
        team: 'one',
        points: 2,
        color: 'blue',
        time: Date.now(),
    })
    history();
    countPoints();
});
btnsDOM[0].addEventListener('click', () => {
    scoreData.push({
        team: 'one',
        points: 3,
        color: 'blue',
        time: Date.now(),
    })
    history();
    countPoints();
});
btnsDOM[3].addEventListener('click', () => {
    scoreData.push({
        team: 'two',
        points: 1,
        color: 'green',
        time: Date.now(),
    })
    history();
    countPoints();
});
btnsDOM[4].addEventListener('click', () => {
    scoreData.push({
        team: 'two',
        points: 2,
        color: 'green',
        time: Date.now(),
    })

    history();
    countPoints();
});
btnsDOM[5].addEventListener('click', () => {
    scoreData.push({
        team: 'two',
        points: 3,
        color: 'green',
        time: Date.now(),
    })
    history();
    countPoints();
});


function history() {
    localStorage.setItem('scores', JSON.stringify(scoreData))
    let HTML = ''
    console.log(scoreData);
    for (const score of scoreData) {
        HTML += `
        <div class="score">
        <p >Time: ${getTime(score.time)} </p>
        <p style="color:${score.color}">Team ${score.team} scored ${score.points} point${score.points > 1 ? 's' : ''}</p>
        <button class="delete">Delete</button>
        </div>`;
    }
    historyDOM.innerHTML = HTML;
    const scoresDOM = document.querySelectorAll('.score');
    for (let i = 0; i < scoresDOM.length; i++) {
        scoresDOM[i].querySelector('button').addEventListener('click', () => {
            scoreData.splice(i, 1);
            localStorage.setItem('scores', JSON.stringify(scoreData))
            localStorage.setItem
            countPoints();
            history();
        })
    }
}
function countPoints() {
    let oneTotal = 0;
    let twoTotal = 0;
    for (const score of scoreData) {
        if (score.team === 'one') {
            oneTotal += score.points;
        } else {
            twoTotal += score.points;
        }
    }
    team1DOM.textContent = oneTotal;
    team2DOM.textContent = twoTotal;
}

function getTime(ms) {
    const d = new Date(ms);
    return `${(d.getHours() + '').padStart(2, 0)}:${(d.getMinutes() + '').padStart(2, 0)}:${(d.getSeconds() + '').padStart(2, 0)}`;
}


