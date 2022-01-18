boxEl=document.querySelector(".form-box");
body=document.querySelector("body");

function signup(){
    boxEl.classList.add('transition');
    body.classList.add('color-change');
    console.log('sigup')
}

function signin(){
    boxEl.classList.remove('transition');
    body.classList.remove('color-change');
    console.log('sigin')
}