function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
function changeBackgroundColor() {
    const colors = ["#ff0000ff", "#ffbb00ff", "#00ff00ff", "#0000feff", "#ff00ccff"];
    let currentColor = document.body.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    document.body.style.backgroundColor = newColor;
};

let changeColor = false;

setInterval(() => {
    updateClock();
    if(changeColor === true){
        changeBackgroundColor();
    }
}, 1 );
document.getElementById("colorButton").onclick = function() {
    changeColor = !changeColor;
};