document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}


let coin = document.querySelector('.coin');

let degrees = 0;
coin.addEventListener('click', function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    
    
    degrees += Math.random() * 30;
    coin.style.transform = "rotate(" + degrees + "deg)";
});