
Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}


var x = document.getElementById("myAudio"); 
var y = document.getElementById("myAudio2");
var z = document.getElementById("myAudio3"); 
var m = document.getElementById("myAudio4");


var list = [x,y,z,m].sample();

function playAudio() { 



    list.play(); 


    
} 
