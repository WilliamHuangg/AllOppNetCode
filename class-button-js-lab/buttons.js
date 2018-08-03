let popbutton = document.querySelector("#popbutton")

popbutton.addEventListener("click", e => {
    console.log("pop button clicked!")
    target.classList.toggle("pop")
})

let bigbutton = document.querySelector("#bigbutton")

bigbutton.addEventListener("click", e => {
    console.log("big button clicked!")
    target.classList.toggle("big")
})

let fancybutton = document.querySelector("#fancybutton")

fancybutton.addEventListener("click", e => {
    console.log("fancy button clicked!")
    target.classList.toggle("fancy")
})

let negativebutton = document.querySelector("#negativebutton")

negativebutton.addEventListener("click", e => {
    console.log("negative button clicked!")
    target.classList.toggle("negative")
})

let lastbutton = document.querySelector("#lastbutton")

lastbutton.addEventListener("click", e => {
    lastbutton.innerHTML = '<img src="https://media.giphy.com/media/d2Z0npcgzTGtBTuU/giphy.gif" width=100px>'
    console.log("last button clicked!")
})