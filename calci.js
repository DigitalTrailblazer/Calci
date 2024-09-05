// console.log('working on js part of calci-1');

let string = ''

let buttons = document.querySelectorAll('#btn')


// window.addEventListener('keypress', (e) => {
//     console.log(e.code);  
//     if (e.target.innerHTML === '=') {
//         string = eval(string)
//         document.querySelector('input').value = string
//     } else {
//         string = string + e.target.innerHTML
//         document.querySelector('input').value = string
//     }
// })


Array.from(buttons).forEach( (button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);  
        if (e.target.innerHTML === '=') {
            string = eval(string)
            document.querySelector('input').value = string
        } else {
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})  

let clearButton = document.querySelectorAll('.clear')

Array.from(clearButton).forEach( (clrbtn) => {
    clrbtn.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.innerHTML == 'AC') {
            string = ''
            document.querySelector('input').value = string
        } else if (e.target.innerHTML == 'C') {
            string = string.slice(0, -1)
            document.querySelector('input').value = string
        } else {
            // nothing to write here.
        }
    })
})