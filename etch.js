let gridContainer = document.querySelector("#container");
let grid;

//Original grid
function makeOriginalGrid() {
  for ( i = 0; i < 256; i++ ) {   
    grid = document.createElement("div");

    grid.classList.add("gridBox");
    gridContainer.appendChild(grid);
    grid.addEventListener("mouseover", hoverBlack);
  }
}

makeOriginalGrid();

// Color grid black
function hoverBlack(e) {
  if (e.target.className === "gridBox") {
    e.target.style.background = "black";
  }
}

// Color grid random
function getRandColor() {
  let letters = "0123456789ABCDEF";
  let getRandLetter = letters.charAt(Math.floor(Math.random() * 16));
  let randColor = "#";

  for ( i = 0; i < 6; i++ ) {
    getRandLetter = letters.charAt(Math.floor(Math.random() * 16));
    randColor += getRandLetter;
  }
  return randColor;
}

function hoverRandColor(e) {
  if (e.target.className === "gridBox") {
    e.target.style.background = getRandColor();
  }
}

//Darken Grid
function hoverDarken(e) {
  if (e.target.className === "gridBox" && e.target.style.opacity < 1) {
    e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.1;
  } else if (e.target.className === "gridBox" && e.target.style.opacity == 1) {
    e.target.style.opacity = (!parseFloat(e.target.style.opacity) && 0) + 0.1;
  }
}

//Create new grid
function createGrid() {
  function convertToNumber() {
    return prompt("How many squares do you want in the new grid?", "");
  }

  let gridNoValue = convertToNumber();

  if (isNaN(gridNoValue)) {
    alert("You didn't enter a number!");
    alert("Please enter a number");
  } else if (gridNoValue == null || gridNoValue == "" || gridNoValue.trim() == "") {
    alert("You didn't enter a number!");
    alert("Please enter a number");
  } else {
    while (gridContainer.hasChildNodes()) {
      gridContainer.removeChild(gridContainer.firstChild);
      gridContainer.removeAttribute("id");
      gridContainer.setAttribute("id", "container2");
    }

    for ( i = 0; i < gridNoValue * gridNoValue; i++ ) {        
      const grid = document.createElement("div");
      grid.classList.add("gridBox");
        
      let gridContainer2 = document.getElementById("container2");
      gridContainer2.style.gridTemplateColumns = `repeat(${gridNoValue}, 1fr)`;
      gridContainer2.style.gridTemplateRows = `repeat(${gridNoValue}, 1fr)`;        
      gridContainer2.appendChild(grid);

      grid.addEventListener("mouseover", hoverBlack);
    } 
  }
}

const navigation = document.createElement("div");
const newGridBtn = document.createElement("button");
const defaultStyleBtn = document.createElement("button");
const randomColorBtn = document.createElement("button");
const darkenBtn = document.createElement("button");

navigation.classList.add("navigation");
newGridBtn.textContent = "New Grid";
defaultStyleBtn.textContent = "Default Style";
randomColorBtn.textContent = "Random Color";
darkenBtn.textContent = "Darken";

defaultStyleBtn.setAttribute("id", "defaultColor");
randomColorBtn.setAttribute("id", "randomColor");
darkenBtn.setAttribute("id", "darken");
newGridBtn.setAttribute("id", "createNewGrid");

navigation.appendChild(defaultStyleBtn);
navigation.appendChild(randomColorBtn);
navigation.appendChild(darkenBtn);
navigation.appendChild(newGridBtn);
document.body.insertBefore(navigation, gridContainer);

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.setAttribute("style", "margin: 0 5px");
});

let title = document.createElement("h1");
title.textContent = "Etch-a-Sketch";
document.body.insertBefore(title, navigation);

navigation.addEventListener("click", function(e) {
  if (e.target.id == "defaultColor") {
    gridContainer.removeEventListener("mouseover", hoverRandColor);
    gridContainer.removeEventListener("mouseover", hoverDarken);
    gridContainer.addEventListener("mouseover", hoverBlack);
  } else if (e.target.id == "randomColor") {
    gridContainer.removeEventListener("mouseover", hoverDarken);
    gridContainer.removeEventListener("mouseover", hoverBlack);
    gridContainer.addEventListener("mouseover", hoverRandColor);
    
  } else if (e.target.id == "darken") {
    gridContainer.removeEventListener("mouseover", hoverRandColor);
    gridContainer.removeEventListener("mouseover", hoverBlack);
    gridContainer.addEventListener("mouseover", hoverDarken);
  } else if (e.target.id == "createNewGrid") {
    createGrid();
  }
});

/*
    function hoverRandom() {
      let letters = "0123456789ABCDEF";
      let getRandLetter = letters.charAt(Math.floor(Math.random() * 16));
      let randColor = "#";

      for ( i = 0; i < 6; i++ ) {
        getRandLetter = letters.charAt(Math.floor(Math.random() * 16));
        randColor += getRandLetter;
      }
      grid.setAttribute("style", `background: ${randColor}`);
    }

newGridBtn.addEventListener("click", createGrid);
*/







  /*  for ( i = 0; i < gridNoValue * gridNoValue; i++ ) {
        function hover() {
          grid.classList.add("hover");
        }
          
        const grid = document.createElement("div");
        grid.classList.add("gridBox");
        
        document.getElementById("container").appendChild(grid);
        grid.addEventListener("mouseover", hover);
      } */

      /*    Random Color   
      for ( i = 0; i < gridNoValue * gridNoValue; i++ ) {
        function hoverRandom() {
          let letters = "0123456789ABCDEF";
          let getRandLetter = letters.charAt(Math.floor(Math.random() * 16));
          let randColor = "#";

          for ( i = 0; i < 6; i++ ) {
            getRandLetter = letters.charAt(Math.floor(Math.random() * 16));
            randColor += getRandLetter;
          }
          grid.setAttribute("style", `background: ${randColor}`);
        }
        
        const grid = document.createElement("div");
        grid.classList.add("gridBox");
        
        let gridContainer2 = document.getElementById("container2");
        gridContainer2.style.gridTemplateColumns = `repeat(${gridNoValue}, 1fr)`;
        gridContainer2.style.gridTemplateRows = `repeat(${gridNoValue}, 1fr)`;        
        gridContainer2.appendChild(grid);

        grid.addEventListener("mouseover", hoverRandom);
      } */


      /* Normal
        for ( i = 0; i < gridNoValue * gridNoValue; i++ ) {
          function hover() {
            grid.classList.add("hover");
          }
        
          const grid = document.createElement("div");
          grid.classList.add("gridBox");
        
          let gridContainer2 = document.getElementById("container2");
          gridContainer2.style.gridTemplateColumns = `repeat(${gridNoValue}, 1fr)`;
          gridContainer2.style.gridTemplateRows = `repeat(${gridNoValue}, 1fr)`;        
          gridContainer2.appendChild(grid);

          grid.addEventListener("mouseover", hover);
        } 
      */

      /*    for ( i = 0; i < gridNoValue * gridNoValue; i++ ) {
        
        function hoverDarken() {
          grid.setAttribute("style", "background: #000;");
          let updatingOpacity = grid.style.opacity = 0.1;
          updatingity += 0.1);
                        
        } */

   