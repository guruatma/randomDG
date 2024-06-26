const randomStringElement = document.getElementById('randomString');
const container = document.getElementById('container');

function getRandomString() {
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateRandomString() {
    const string = getRandomString();
    randomStringElement.textContent = string;
    container.style.backgroundColor = getRandomColor();
    fitStringToScreen();
}

function fitStringToScreen() {
    let fontSize = 100;
    randomStringElement.style.fontSize = `${fontSize}px`;

    while (randomStringElement.offsetWidth > container.offsetWidth || randomStringElement.offsetHeight > container.offsetHeight) {
        fontSize--;
        randomStringElement.style.fontSize = `${fontSize}px`;
    }
}

window.addEventListener('load', updateRandomString);
window.addEventListener('resize', fitStringToScreen);
randomStringElement.addEventListener('click', updateRandomString);
