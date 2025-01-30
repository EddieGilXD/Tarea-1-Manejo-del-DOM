function changeTitleToHD() {
    const changeText = document.getElementById("encabezado");
    changeText.textContent = 'Hello DOM';
}

function changeToOriginal() {
    const changeText = document.getElementById("encabezado");
    changeText.textContent = "Hello World!"
}

function changeToboth() {
    const changeText = document.getElementById("encabezado");
    changeText.textContent = "Hello World! Hello DOM!"
}