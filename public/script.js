document.addEventListener("DOMContentLoaded", () => {
    const textBox = document.getElementById("textBox");
    const button = document.getElementById("colorButton");
    const displayBox = document.getElementById("displayBox"); 

    let colorIndex = 0;
    const colors = [
        { background: "white", color: "black" },
        { background: "black", color: "white" },
        { background: "lightblue", color: "red" }
    ];

    textBox.addEventListener("input", () => {
        displayBox.textContent = textBox.value || "Su texto aparecerá acá";
    });

    
        button.addEventListener("click", () => {
            colorIndex = (colorIndex + 1) % colors.length;
            displayBox.style.background = colors[colorIndex].background;
            displayBox.style.color = colors[colorIndex].color;
            textBox.value=''
        });
});
