
Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}


var x = document.getElementById("myAudio"); 
var y = document.getElementById("myAudio2");
var z = document.getElementById("myAudio3"); 
var m = document.getElementById("myAudio4");
var c = document.getElementById("myAudio5"); 
var a = document.getElementById("myAudio6");

var list = [x,y,z,m,c,a].sample();

function playAudio() { 


    list.loop = true;

    list.play(); 


    
} 