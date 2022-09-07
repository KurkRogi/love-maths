// Wait for the DOM to Load
document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
});

/**
 * The main loop function of the game generates
 * 2 random numbers
 */
function runGame(gameType) {
    //Create 2 random numbers
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknow game type: ${gameType}`);
        throw `Unknow game type: ${gameType}. Aborting!`;
    }
}

/**
 * Read and Check users answer from DOM
 * and check it against array returned from
 * calculateCorrectAnswer()
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey, you got it right");
    } else {
        alert(`Aww... You answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`)
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Get operands and operator from the DOM
 * calculate and return the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operand = (document.getElementById("operator").innerText);

    if (operand === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert (`Unimplemented operator ${operand}.`);
        throw `Unimplemented operator ${operand}. Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent= "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}