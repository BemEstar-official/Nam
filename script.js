const buttonContainer = document.getElementById("buttonContainer");
const naoButton = document.getElementById("naoButton");
const simButton = document.getElementById("simButton");
const mensagem = document.getElementById("mensagem");

naoButton.addEventListener("click", function() {
    moveContainerRandomly();
});

simButton.addEventListener("click", function() {
    showMessage();
});

function moveContainerRandomly() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const buttonContainerWidth = buttonContainer.offsetWidth;
    const buttonContainerHeight = buttonContainer.offsetHeight;

    const maxRandomX = containerWidth - buttonContainerWidth;
    const maxRandomY = containerHeight - buttonContainerHeight;

    if (maxRandomX > 0 && maxRandomY > 0) {
        const randomX = Math.floor(Math.random() * maxRandomX);
        const randomY = Math.floor(Math.random() * maxRandomY);

        buttonContainer.style.left = `${randomX}px`;
        buttonContainer.style.top = `${randomY}px`;
    }
}


function showMessage() {
    buttonContainer.style.display = "none";
    mensagem.style.display = "block";
    mensagem.textContent = "Simmmmm, eu tambem fofaaa, te amooo muitoooo!";
    mensagem.style.fontSize = "2em";
    mensagem.style.textAlign = "center";
    mensagem.style.animation = "fadeIn 2s, pulse 2s infinite, colorChange 2s infinite";
}



