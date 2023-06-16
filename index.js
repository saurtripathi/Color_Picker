const baseURI = 'https://www.thecolorapi.com/scheme'
const selectMenu = document.getElementById('select')
const colorPicker = document.getElementById('picker')
const getBtn = document.getElementById('get-btn')
const box = document.getElementById('color-box')


let seedColor = colorPicker.getAttribute('value')
let selectValue = selectMenu.options[selectMenu.selectedIndex].value
let hexColorValueArray = []

render()

selectMenu.addEventListener('change', function () {
    selectValue = selectMenu.options[selectMenu.selectedIndex].value
})

colorPicker.addEventListener('input', (event) => {
    colorPicker.setAttribute('value', event.target.value)
    seedColor = colorPicker.getAttribute('value')
})

document.body.onclick = e => {

    let id = e.target.id

    if (id === 'get-btn') {
        render()
    }
    const colorBar = document.getElementById(e.target.id);
    navigator.clipboard.writeText(colorBar.style.backgroundColor);

}


function render() {
    hexColorValueArray = []
    console.log(`${baseURI}?hex=${seedColor.substring(1)}&mode=${selectValue}`)
    fetch(`${baseURI}?hex=${seedColor.substring(1)}&mode=${selectValue}`)
        .then(response => response.json())
        .then(data => {
            data.colors.forEach(color => {
                hexColorValueArray.push(color.hex.value)
            })
        })
    setTimeout(function () {
        getColorBarContainerHtml()
        for (let i = 0; i < hexColorValueArray.length; i++) {
            document.getElementById(`bar-${i + 1}`).style.backgroundColor = hexColorValueArray[i]
        }
        hexColorValueArray = ''
    }, 1000)
}

function getHexCodeHtml() {
    let hexCodeHtml = ''
    for (let i = 0; i < 5; i++) {
        hexCodeHtml += `<span class="hex-code">${hexColorValueArray[i]}</span>`
    }
    return hexCodeHtml
}
function getColorBarHtml() {
    let colorBarHtml = ''
    for (let i = 0; i < 5; i++) {
        colorBarHtml += `<div class="color-bar tooltip" id='bar-${i + 1}' ><span class="tooltiptext">Click to copy</span></div>`
    }
    return colorBarHtml
}



function getColorBarContainerHtml() {
    let html = ''
    let colorBarHtml = getColorBarHtml()
    let hexCodeHtml = getHexCodeHtml()
    html += `            
        <div class="color-bar-container" id="color-bar-container">
            ${colorBarHtml}
        </div>
        <div class="hex-footer" id="hex-footer">
            ${hexCodeHtml}
        </div>`
    box.innerHTML = html
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}