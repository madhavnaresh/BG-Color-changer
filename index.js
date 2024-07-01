document.getElementById("clrbtn").addEventListener("click", function () {
    document.body.style.backgroundColor = randomclrgen();
    let color=randomclrgen();
    document.getElementById("clrcheck").textContent=color;
});

function randomclrgen() {
    const letter = '012356789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + letter[Math.floor(Math.random() * 15)];
    }
    return color;
}