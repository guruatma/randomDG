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

function getContrastColor(hexColor) {
    // Convert hex to RGB
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return black for light colors, white for dark colors
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

function updateRandomString() {
    const string = getRandomString();
    randomStringElement.textContent = string;
    
    const bgColor = getRandomColor();
    container.style.backgroundColor = bgColor;
    
    const textColor = getContrastColor(bgColor);
    randomStringElement.style.color = textColor;
    
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
