boxEl=document.querySelector(".form-box");

function signup(){
    boxEl.classList.add('transition');
    console.log('sigup')
}

function signin(){
    boxEl.classList.remove('transition');
    console.log('sigin')
}