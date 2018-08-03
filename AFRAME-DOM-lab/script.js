var leftEye = document.querySelector("#leftEye")
var rightEye = document.querySelector("#rightEye")
var face = document.querySelector("#face")
var antenna1 = document.querySelector("#antenna1")
var antenna2 = document.querySelector("#antenna2")
var mouth = document.querySelector("#mouth")
var hello = document.querySelector("#hello")
var greensphere = document.querySelector("#greensphere")
var yellowsphere = document.querySelector("#yellowsphere")
var redsphere = document.querySelector("#redsphere")

face.addEventListener('click', e => {
    console.log("hi")
    leftEye.setAttribute("color", "yellow")
    rightEye.setAttribute("color", "yellow")
    
    // ` <a-sphere id = "leftEye" color = "yellow" position = "-.4 1.4 -5.24" radius = ".3"></a-sphere>
    //     <a-sphere id = "leftPupil" color = "black" position = "-.4 1.4 -5" radius = ".1"></a-sphere>
    //     <a-sphere id = "rightEye" color = "yellow" position = ".4 1.4 -5.24" radius = ".3"></a-sphere>
    //     <a-sphere id = "rightPupil" color = "black" position = ".4 1.4 -5" radius = ".1"></a-sphere>`
})

antenna1.addEventListener('click', e => {
    console.log("antenna1")
    antenna1.setAttribute("rotation", "0 0 0")
    antenna1.setAttribute("color", "purple")
})

antenna2.addEventListener('click', e => {
    console.log("antenna2")
    antenna2.setAttribute("rotation", "0 0 0")
    antenna2.setAttribute("color", "purple")
})

mouth.addEventListener('click', e => {
    console.log("mouth")
    hello.setAttribute("visible", "true")
})

greensphere.addEventListener('click', e => {
    console.log("green ball")
    face.setAttribute("scale", "4 4 4")
    antenna1.setAttribute("scale", ".6 .8 .6")
    antenna1.setAttribute("position", ".5 4.4 -6")
    antenna2.setAttribute("scale", ".6 .8 .6")
    leftEye.setAttribute("radius", ".6")
    leftPupil.setAttribute("radius", ".2")
    rightEye.setAttribute("radius", ".6")
    rightPupil.setAttribute("radius", ".2")
    
})

yellowsphere.addEventListener('click', e => {
    console.log("yellow ball")
})

redsphere.addEventListener('click', e => {
    console.log("red ball")
    leftEye.setAttribute("color", "red")
    rightEye.setAttribute("color", "red")
    mouth.setAttribute("color", "black")
    hello.setAttribute("visibile", "true")
    hello.setAttribute("value", "I am Evil Robot")
})