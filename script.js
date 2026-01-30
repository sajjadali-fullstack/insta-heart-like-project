let cont = document.querySelector('.container')
let like = document.querySelector('#like')
// let heart = document.querySelector('#heart')

cont.addEventListener('dblclick', () => {
    console.log('You Like this post');
    like.style.transform = 'translate(-50% -50%)scale(1);'
    // like.style.color = 'red'
    like.style.opacity = 0.9





    // Set Timeout in Seconds / Dealy Function inbuilt function

    setTimeout(() => {
        like.style.transform = 'translate(-50% -50%)scale(1);'
        like.style.opacity = 0

    }, 3000)


    setTimeout(() => {
        like.style.transform = 'transform ease 0.5s'
        like.style.opacity = 0

    }, 1000)
})

cont.addEventListener('contextmenu', () => {
    alert("Dont hack us by Right click Please!");
})

