import {addBadge, swipeVertically, getNewDog } from "./utils.js"



const acceptBtn = document.getElementById('accept')
const rejectBtn = document.getElementById('reject')


function render() {
    let dog = getNewDog()
    document.getElementById('dog-desc').innerHTML = dog.getDogHtml()
    addBadge(dog)
}

render()



















