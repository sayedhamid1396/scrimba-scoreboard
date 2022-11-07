const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');
const scoreBtn = document.querySelector('btn');
const homeTeam = document.getElementById('home-team');
const guestTeam = document.getElementById('guest-team');
const newGame = document.getElementById('new-game');

function addScore(team, score){
    
    if(team==="home"){
        homeScore.textContent=score+Number(homeScore.innerText);
    }
    else{
        guestScore.textContent=score+Number(guestScore.innerText);
    }
    leaderCheck();
}

function leaderCheck(){
    let home = Number(homeScore.textContent)
    let guest = Number(guestScore.textContent)
    if(home > guest){
        homeTeam.classList.add('pink-text');
        guestTeam.classList.remove('pink-text');
    }
    else if(home < guest){
        guestTeam.classList.add('pink-text');
        homeTeam.classList.remove('pink-text');
    }
}

newGame.addEventListener('click', function (){

    homeScore.textContent = 0;
    guestScore.textContent = 0;
    guestTeam.classList.remove('pink-text');
  homeTeam.classList.remove('pink-text');


});