const area = [null, null, null, null, null, null, null, null, null];
let x_text = "X";
let O_text = "O";
let currplayer = "O";// let winbox = [];// debugger// console.log(e)// alert(e.target.id);
let deg = 0;
let Pleft = 50;
let Ptop = 23;
function BoxClick(e) {
    const id = e.target.id;
    if (area[id] == null) {
        area[id] = currplayer;
        e.target.innerHTML = currplayer;
        if (checkwinner(currplayer)) {
            text.innerHTML = `${currplayer} win!`;
            text.style.color = 'lightgreen'; // winbox.forEach(el =>// {let element = document.getElementById(el);//element.style.backgroundColor = 'lightgreen';})
            let a = document.getElementById('line');
            a.style.transform = `rotate(${deg}deg)`;
            a.style.top = Ptop + "px";
            a.style.left = Pleft + "%";
            a.style.display = "block";
            let index = document.getElementById('main');
            index.style.zIndex = -1;
        }
        currplayer = currplayer === O_text ? x_text : O_text;
    }
}
function checkwinner(player) {
    if (area[0] === player) {
        if (area[1] === player && area[2] === player) {
            winbox = [0, 1, 2];
            deg = 90;
            Ptop = -56;
            Pleft = 50;
            return true;
        }
        if (area[3] === player && area[6] === player) {
            winbox = [0, 3, 6];
            Ptop = 25;
            Pleft = 29.5;
            return true;
        }
    }
    if (area[4] === player) {
        if (area[0] === player && area[8] === player) {
            winbox = [0, 4, 8];
            deg = 129;
            return true;
        }
        if (area[1] === player && area[7] === player) {
            winbox = [1, 4, 7];
            deg = 180;
            return true;
        }
        if (area[2] === player && area[6] === player) {
            winbox = [2, 4, 6];
            deg = 51;
            return true;
        }
        if (area[3] === player && area[5] === player) {
            winbox = [3, 4, 5];
            deg = 90;
            return true;
        }
    }
    if (area[8] === player) {
        if (area[6] === player && area[7] === player) {
            winbox = [6, 7, 8];
            deg = 90;
            Ptop = 107;
            Pleft = 50;
            return true;
        }
        if (area[2] === player && area[5] === player) {
            winbox = [2, 5, 8];
            Ptop = 24;
            Pleft = 70.2;
            return true;
        }
    }
}
function start() {
    let index = document.getElementById('main');
    index.style.zIndex = 1;
    text.innerHTML="Let's play!!";
}
function replay() {
    start();
    for (let i = 0; i <= 8; i++) {
        let a = document.getElementById(i)
        a.innerHTML = "";
        area[i] = null;
    }
    let b = document.getElementById('line');
    b.style.display = "none";
    text.innerHTML = "Let's play!!";
    text.style.color = 'black';
    currplayer = "O";
    deg = 0;
    Pleft = 50;
    Ptop = 23;
}

