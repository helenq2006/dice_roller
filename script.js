//functions

function rollDice() {
    const dice1 = rollDie();
    const dice2 = rollDie();
    const total = dice1 + dice2;

    document.getElementById("dice1").textContent = dice1;
    document.getElementById("dice2").textContent = dice2;
    document.getElementById("total").textContent = total;
}
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//event listener
document.getElementById("rollButton").addEventListener("click", rollDice);
