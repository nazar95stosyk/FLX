let game = confirm("Do you want to play a game?");
if(game === ' ' || game === null){
    alert('You did not become a millionaire, but can.');
}
let currentPrize = 10;
let maxPrize1 = 10;
let userNum;
let randNum; 
let prize1 = 0;
let maxNum = 5;
let attempt = 3; 
if (game) {
    randNum = Math.floor(Math.random() * (maxNum + 1));
    while (attempt > 0) {
        userNum = parseInt(prompt(
            `Enter a number from 0 to ${maxNum}
             Attempt left: ${attempt}
             Total prize: ${prize1}$
             Possible prize on current attempt: ${maxPrize1}$`));
        if (userNum === randNum) {
            prize1 += maxPrize1;
            if (confirm(`Congratulation! Your prize is:${prize1}$ Do you want to continue?`)) {
                attempt = 3;
                maxPrize1 = currentPrize * 3;
                currentPrize = maxPrize1;
                maxNum *= 2;
                randNum = Math.floor(Math.random() * (maxNum + 1));
                
            } else {
                break;
            }
        } else {
            maxPrize1 = Math.floor(maxPrize1 / 2);
            attempt--;
        }
    }
    alert(`Thank you for a game. Your prize is: ${prize1}$`);
} else {
    alert("You did not become a millionaire, but can.");
}