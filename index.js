const selectMenu = document.getElementById('select')
const colorPicker = document.getElementById('picker')
const getBtn = document.getElementById('get-btn')
const box = document.getElementById('color-box')


let seedColor = ''
let selectValue = ''

selectMenu.addEventListener('change', function () {
    selectValue = selectMenu.options[selectMenu.selectedIndex].value
    console.log(selectValue)
})

colorPicker.addEventListener('input', (event) => {
    colorPicker.setAttribute('value', event.target.value)
    seedColor = colorPicker.getAttribute('value')
    console.log('the seed color is ' + seedColor.substring(1))
})

getBtn.addEventListener('click', () => {
    let hexColorValueArray = []
    console.log(`https://www.thecolorapi.com/scheme?hex=${seedColor.substring(1)}&mode=${selectValue}`)
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.substring(1)}&mode=${selectValue}`)
        .then(response => response.json())
        .then(data => {
            // for(let i = 0; i < data.colors.length; i++)
            // // hexColorValueArray[i] = data.colors[i].hex.value
            // console.log(data.colors[i].hex.value)
            //     // hexColorValueArray.push(`${color.hex.value}`)
            // // data.colors.forEach(color => hexColorValueArray.push(color.hex.value))



                data.colors.forEach(color => {
                    
                    hexColorValueArray.push(color.hex.value)
                })

        }
        )
setTimeout(function(){

    console.log(hexColorValueArray)
    let html = ''
    let html1 = ''
    // html += `            
    //                     <div class="color-bar-container" id="color-bar-container">
    //                         <div class="color-bar tooltip" id='bar-1' ><span class="tooltiptext">Click to copy</span></div>
    //                         <div class="color-bar tooltip" id='bar-2' ><span class="tooltiptext">Click to copy</span></div>
    //                         <div class="color-bar tooltip" id='bar-3'  ><span class="tooltiptext">Click to copy</span></div>
    //                         <div class="color-bar tooltip" id='bar-4'  ><span class="tooltiptext">Click to copy</span></div>
    //                         <div class="color-bar tooltip" id='bar-5'  ><span class="tooltiptext">Click to copy</span></div>
    //                     </div>`

    html += `            
   
        <div class="color-bar tooltip" id='bar-1' ><span class="tooltiptext">Click to copy</span></div>
        <div class="color-bar tooltip" id='bar-2' ><span class="tooltiptext">Click to copy</span></div>
        <div class="color-bar tooltip" id='bar-3'  ><span class="tooltiptext">Click to copy</span></div>
        <div class="color-bar tooltip" id='bar-4'  ><span class="tooltiptext">Click to copy</span></div>
        <div class="color-bar tooltip" id='bar-5'  ><span class="tooltiptext">Click to copy</span></div>
    `
                        // html1 +=  `<div class="hex-footer" id="hex-footer">
                        //     <span class="hex-code">${hexColorValueArray[0]}</span>
                        //     <span class="hex-code">${hexColorValueArray[1]}</span>
                        //     <span class="hex-code">${hexColorValueArray[2]}</span>
                        //     <span class="hex-code">${hexColorValueArray[3]}</span>
                        //     <span class="hex-code">${hexColorValueArray[4]}</span>
                        // </div>`
    box.innerHTML = html
    // box.innerHTML += html1
    const div1 = document.getElementById('bar-1')
    const div2 = document.getElementById('bar-2')
    const div3 = document.getElementById('bar-3')
    const div4 = document.getElementById('bar-4')
    const div5 = document.getElementById('bar-5')

    div1.style.backgroundColor = hexColorValueArray[0]
    div2.style.backgroundColor = hexColorValueArray[1]
    div3.style.backgroundColor = hexColorValueArray[2]
    div4.style.backgroundColor = hexColorValueArray[3]
    div5.style.backgroundColor = hexColorValueArray[4]
    hexColorValueArray = ''

    document.body.onclick = e => {
    const colorBar = document.getElementById(e.target.id);
    console.log(colorBar.style.backgroundColor)
    navigator.clipboard.writeText(colorBar.style.backgroundColor);
    // alert(colorBar.style.backgroundColor)

    }

 



},2000)
   




})






// fetch(`https://www.thecolorapi.com/scheme?hex=7f2d1f`)
// .then(response => response.json())
// .then(data => 
//     {
//         data.colors.forEach(color => hexColorValueArray.push(color.hex.value))
//         console.log(hexColorValueArray)
//         ['#180906', '#411811', '#6A261A', '#943424', '#BE422C']

//     }
//     )



















