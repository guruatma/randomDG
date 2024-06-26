const randomStringElement = document.getElementById('randomString');

function getRandomString() {
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

function updateRandomString() {
    const string = getRandomString();
    randomStringElement.textContent = string;
    fitStringToScreen();
}

function fitStringToScreen() {
    const container = document.getElementById('container');
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
