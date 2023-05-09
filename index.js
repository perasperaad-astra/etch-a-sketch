


function makeGrid(num1, num2) {
    let containerDiv = document.querySelector('.container'); 
    if (containerDiv.firstChild) {
        clearGrid(); 
    }
    num1 = +num1; 
    num2 = +num2; 

    let divs = document.querySelector('.container'); 


    for (let i = 0; i < num1; i++) {
        let div = document.createElement('div'); 
        let el = document.querySelector('.container'); 
        div.classList.add('row'); 
        el.appendChild(div); 
        for (let j = 0; j < num2; j++){
            let el = document.querySelector('.container'); 
            let newDiv = document.createElement('div');
            newDiv.classList.add('column'); 
            div.appendChild(newDiv); 
        }
    }

}

function clearGrid(){
    let containerDiv = document.querySelector('.container'); 

    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
      }

}

let gridSize = document.querySelector("button"); 
gridSize.addEventListener('click', () => {
    let size = prompt("What number by number, e.g. enter 4x3 grid as 4,3? Maximum size of 100,100.")
    let diffInput = size.split(","); 
    if (diffInput[0] > 100 || diffInput[1] > 100) {
        alert("Try again! Input has to be less than 100 each.")
    }
    makeGrid(diffInput[0], diffInput[1]); 
})

let clearGridButton = document.querySelector("#cleargrid"); 
clearGridButton.addEventListener('click', () => {
    clearGrid(); 
})


document.addEventListener('mouseover', (event) => {
    let el = event.target; 
    if (el.classList.contains('column')) {
        el.classList.add('active'); 
    }
})

let liteBriteButton = document.querySelector("#rainbowbrite"); 
liteBriteButton.addEventListener('click', () => {
    rainbowMode(); 
})

let rainbowMode = function(){
    //TODO: 
    //remove the CSS circle buttons at the bottom 
     //generate a random idx and change .active to neonColors[idx]? 
        //how to update the .active class with changing hex values? refactor?
    let neonColors =  ["#FF3131", "#FF5E00", "#FFF01F", "#FFF01F", "#E7EE4F", "#39FF14", "#7FFF00", "#CCFF00", "#1F51FF", "#0FF0FC", 
        "#BC13FE", "#8A2BE2", "#FF1493", "#FF44CC", "#EA00FF"]; 
  

    document.body.style.background = "#5A5A5A"; 
    let header = document.querySelector("header"); 
    header.textContent = "Lite Brite"; 

}

makeGrid(10,10); 

//Need to add 
// 1. User should be able to shrink size of 'canvas' with a slider or something else more visually appealing
// 2. User should be able to erase whatever pixels they hover over 
// 3. User should be able to toggle between rainbow/lite brite vs. etch a sketch mode 

//CSS
// 1. How to make border of etch a sketch container a shadow? To mimic real etch-a-sketch
// 2. How to add shadow and dimensionality to the buttons? 
// 3. How to add rounded borders to my etch a sketch 'screen'?
// 4. Header font should be bolder I think... and maybe add the 'E' from https://fonts.google.com/specimen/Dancing+Script?category=Serif,Sans+Serif,Display,Handwriting&vfonly=true&preview.text=Etch%20A%20Sketch&preview.text_type=custom. Try experimenting with making the header fonts slightly transparent 
