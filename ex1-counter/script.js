// localStorage.setItem("counter",3)

class Counter{
    number = 0;
    constructor(){
        document.getElementById("counter").innerHTML = localStorage.getItem("counter");
    }
    decrease(){
        this.number -= 1;
        return this.number;
    }

    increase(){
        this.number += 1;
        return this.number;
    }

    reset(){
        this.number = 0;
        return this.number;
    }
}

var counter = new Counter();


function increase(){
    localStorage.setItem("counter",counter.increase());
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
}
function decrease(){
    localStorage.setItem("counter",counter.decrease());
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
}
function reset(){
    localStorage.setItem("counter",counter.reset());
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
}
document.getElementById("decrease").addEventListener("click", decrease)
document.getElementById("reset").addEventListener("click", reset)
document.getElementById("increase").addEventListener("click", increase)
