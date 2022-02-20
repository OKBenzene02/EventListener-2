// =============================================================
const border = document.querySelector('.border')
const pointer = document.querySelector('.pointers')
const tocell = document.querySelector('.pointtocell')
const cellcolor = document.querySelector('.cellcolor')

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
