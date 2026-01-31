
// cont.addEventListener('contextmenu', () => {
// alert("Dont hack us by Right click Please!");
// })

let card = document.querySelector('#card')
let heart = document.querySelector('i')

card.addEventListener('dblclick',() => {
    console.log('you liked it')
    heart.style.transform = 'translate(-50%,-50%) scale(1)'
    heart.style.opacity = 0.8

    setTimeout(()=> {
        heart.style.opacity = 0
    },1000)

    setTimeout(()=> {
        heart.style.transform = 'translate(-50%,-50%) scale(0)'
    }, 2000)
})



// Set Timeout [concept of delay]

setTimeout(()=> {
    console.log('Hello1')
}, 3000)

setTimeout(() => {
    console.log('Hello2')
}, 2000)