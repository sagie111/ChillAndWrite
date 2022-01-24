// IDK - Code By Sagie Dvir
// -------------------------

// functions


// The full screen shit -------------
function getFullscreenElement(){
    return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullscreenElement
    || document.msFullscreenElement;
}

function fullScreen() {
    if (getFullscreenElement()){
        document.exitFullscreen();
    } else {
        document.getElementById("textbox").requestFullscreen().catch();
    }
}   
// ----------------

// music btn --------
function musicbtn() {
    window.open('/music.html','popup','width=450,height=400,scrollbars=no,resizable=0'); return false;
}

// download txt file -------------
function txtFile() {

    var blob = new Blob([x],
            { type: "text/plain;charset=utf-8" });
    saveAs(blob, "YourText.txt");
}       
// -----------------------

// save the text----------
function saveWrite(){
    localStorage.setItem('thoughts__!', x);

    window.location.reload();

    alert("Your text has been saved for your next visit😊");

    
}
// --------

// copy the text -----------------
function copy(){
    var copyText = document.getElementById("textbox");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Copied 👍👏");
}
// -------------

// the letters shit ----------
function charcountupdate(str) {
    var lng = str.length;
    
    document.getElementById("letters").innerHTML ='Letters: ' + lng;
} 
// ---------------------


// the emoji shit ----------------
function myfunc(){
    if (emojiStorage) {
        button.textContent = emojiStorage;
        var list2 = ['😤','👾', '🎃','😾', '😈','🐷', '🌈','🌼', '🌻', '🌸', '🥀', '🍣', '🍏', '🥑', '🍜' , '🍉' , '🍻' , '🍩' , '🍭' , '🎉', '🧸', '🔱', '🚭' , '🤯', '🐸', '🤡' , '🤑', '🚬', '💨', '👿', '😴', '🥶', '🚀', '🍄', '🏝️', '🥝', '🍒', '🍇', '🥨', '🍟', '🍪', '🍫', '🍬', '☕', '🍹', '🐣', '🐍', '🦢', '🌟', '🍍', '🌊', '🌍', '🌵', '🎺','🧀','💊','💛','🍯','🍋'];
        var random2 = list2.sample();
        button.textContent = random2;
        localStorage.setItem('emoji__!' , random2)
    } else {
        var list = ['😤','👾', '🎃','😾', '😈','🐷', '🌈','🌼', '🌻', '🌸', '🥀', '🍣', '🍏', '🥑', '🍜' , '🍉' , '🍻' , '🍩' , '🍭' , '🎉', '🧸', '🔱', '🚭' , '🤯', '🐸', '🤡' , '🤑', '🚬', '💨', '👿', '😴', '🥶', '🚀', '🍄', '🏝️', '🥝', '🍒', '🍇', '🥨', '🍟', '🍪', '🍫', '🍬', '☕', '🍹', '🐣', '🐍', '🦢', '🌟', '🍍', '🌊', '🌍', '🌵', '🎺','🧀','💊','💛','🍯','🍋'];
        var random = list.sample();
        button.textContent = random;
        localStorage.setItem('emoji__!' , random)
    }
}
// ----------------------------

// settings (delete button) ---------------
function deletedData(){
    localStorage.clear('name__!');
    localStorage.clear('emoji__!')
    localStorage.clear('background__!')
    localStorage.clear('textcolor__!')
    localStorage.clear('thoughts__!')
    window.location.reload();
}





// ------------------



// Code

const storage = localStorage.getItem('name__!');
const button = document.querySelector('button');
const emojiStorage  = localStorage.getItem('emoji__!');
const textbox2 = document.getElementById('textbox');
const savedText = localStorage.getItem('thoughts__!')


if (storage) {
    document.getElementById("text").innerHTML = "Chill And Write, " + storage;
}
else {
    window.location.href ="/index.html";
}




if (emojiStorage) {
    button.textContent = emojiStorage;
}

if (savedText) {
    textbox2.textContent = savedText;
}



if (localStorage.getItem('background__!')) {
    document.querySelector('body').style.background= localStorage.getItem('background__!');
}

if (localStorage.getItem('textcolor__!'))  {
    document.querySelector('body').style.color=localStorage.getItem('textcolor__!') ;
}




// take input to the download button 
let x = "";

textbox2.addEventListener('input', letter => {
    x = letter.target.value;
})
// ----


Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}


// ----------------------
// Get the  settings modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// -------------------

document.querySelector('#nightmode').onchange = function (e) {
var check = e.target.checked;
var backColor = check ? "#2c2c32" : "#c06be4";
var color = check ? "white" : "black";
document.querySelector('body').style.background= backColor ;
document.querySelector('body').style.color= color ;
localStorage.setItem('background__!', backColor);
localStorage.setItem('textcolor__!', color);
};

document.querySelector('body').style.background= localStorage.getItem('background__!') ;
document.querySelector('body').style.color=localStorage.getItem('textcolor__!') ;


