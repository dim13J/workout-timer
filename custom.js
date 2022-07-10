document.getElementById('stopBtn').disabled = true;
let mainInterval = null
let redInterval = null;
let firstInterval = null;

function startTimer() {
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('startBtn').disabled = true;
    const activity = document.getElementById('activity').value;
    const rest = document.getElementById('rest').value;
    changeGreenToRed(activity, rest);
    const x = (Number(activity) + Number(rest)) * 1000;
    setInterval(function () {
        changeGreenToRed(activity, rest)
    }, x)
}

function changeGreenToRed(activity, rest) {
    clearInterval(redInterval);
    document.body.style.backgroundColor = "green"

    displaySeconds(activity)
    let second = 1
    firstInterval = setInterval(function () {
        displaySeconds(activity - second)
        second++
    }, 1000)
    // set color green for activity milliseconds
    setTimeout(function () {
        clearInterval(firstInterval);
        document.body.style.backgroundColor = "red"
        displaySeconds(rest)
        let second = 1
        redInterval = setInterval(function () {
            displaySeconds(rest - second)
            second++
        }, 1000)
    }, Number(activity * 1000))
}

function displaySeconds(sec) {
    document.getElementById('timer').innerHTML = sec
}

function stopTimer() {
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('startBtn').disabled = false;
    
    // delete Intervals
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);

    document.getElementById('timer').innerHTML = ''
    document.body.style.backgroundColor = "white";
    document.getElementById('activity').value = '';
    document.getElementById('activity').value = '';

}
