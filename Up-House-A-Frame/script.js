var redbox = document.querySelector("#redbox")
var houseBalloons = document.querySelector("#houseBalloons")

redbox.addEventListener('click', e => {
    console.log("redbox clicked")
    // console.log(Math.floor())
    houseBalloons.innerHTML += `<i>$(xvalue) $(yvalue) $(zvalue)</i>`
})