'use strict';

const getWisMod = function(){
    const wisdomInput = document.querySelector('#wisdom');
    const wisdomMod = Number(wisdomInput.value);
    return wisdomMod;
} // returns an int of players inputed wismod

const getConMod = function(){
    const conInput = document.querySelector('#constituiton');
    const constitutionMod = Number(conInput.value);
    return constitutionMod;
} // returns an int of players inputed conmod

const calcEmpathy = function(wisMod, conMod){
    const empathyResult = 3 + Math.floor((wisMod + conMod)/2);
    return empathyResult;
} //caclulates and returns the empathy points

const calcEmpathyButton = document.querySelector('#calcEmpathyButton')
calcEmpathyButton.addEventListener('click', () => {
    let result = calcEmpathy(getWisMod(), getConMod());
    if (result < 0) {result = 0};

    const resultDisplay = document.querySelector('#empathyResult');
    resultDisplay.textContent = 'Your Total Empathy Points: ' + result;
});

