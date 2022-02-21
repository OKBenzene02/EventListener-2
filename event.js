// =============================================================
const border = document.querySelector('.border')
const pointer = document.querySelector('.pointers')
const tocell = document.querySelector('.pointtocell')
const cellcolor = document.querySelector('.cellcolor')
const body = document.body
const details = document.querySelector('.details')
const darkMode = document.querySelector('p')

border.addEventListener('mouseenter', (e)=>{
    border.style.outline = "5px solid rgb(2, 187, 243)"
    pointer.innerText = 'Pointer in container'
})

border.addEventListener('mouseleave', (e)=>{
    border.style.outline = ""
    pointer.innerText = 'Pointer off container'
})

const cells = document.querySelectorAll('.cell')
function randomColor() {
    let color = Math.floor(Math.random()*16777215).toString(16)
    return color
};

cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
        cell.style.outline = "3px solid rgb(2, 187, 243)"
        tocell.innerText = 'Pointer on cell'
    })

    cell.addEventListener("mouseleave", (e) => {
        cell.style.outline = ""
        tocell.innerText = 'Pointer off cell'
    })
    
    cell.addEventListener("click", (e) =>{
        if (cell.style.backgroundColor)
        {
            cell.style.backgroundColor = ""
            cellcolor.style.color = ""
            cellcolor.innerText = "Color reverted"
        }
        else {
            let someColor = randomColor()
            cell.style.backgroundColor = `#${someColor}`
            cellcolor.style.color = `#${someColor}`
            cellcolor.innerText = "Color changed"
        }
    })
})

body.addEventListener("keydown", (event) => {
    // event.code holds the current key pressed:
    console.log(event.code);
  
    // Test for KeyD (the "d" key)
    if (event.code === "KeyD") {
      body.style.backgroundColor === ""
        ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
        : (body.style.backgroundColor = "");
        details.style.border === "" ? (details.style.border = "5px solid white") : (details.style.border = "")
        details.style.color === "" ? (details.style.color = "white") : (details.style.color = "")
        darkMode.style.color === "" ? (darkMode.style.color = "white") : (darkMode.style.color = "")
    }
  });