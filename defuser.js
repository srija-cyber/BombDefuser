let timerElement = document.getElementById('timer');
let defuserElement = document.getElementById('defuser');
let countDown = 10;
let interval = setInterval(function() {
    countDown = countDown - 1;
    timerElement.textContent = countDown;
    if (countDown === 0) {
        timerElement.textContent = "BOOM";
        clearInterval(interval);
    }
}, 1000);
defuserElement.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserElement.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && countDown !== 0) {
        timerElement.textContent = "You did it!";
        clearInterval(interval);
    }
});