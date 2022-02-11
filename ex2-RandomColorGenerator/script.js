// var test = ["#32a852","#51755b","#c5edd0"];
// localStorage.setItem("colorGen", JSON.stringify(test));
// var test2 = JSON.parse(localStorage.getItem("colorGen"));
// console.log(test2[2])

class Color {
    colorType = "HEX";
    records = [];

    constructor(type){
        this.colorType = type;
        this.getRecords();
    }
    
    generate() {
        let color = this.getRandomNumber();
        this.records.push(color);
        localStorage.setItem('colorGen', JSON.stringify(this.records));
        this.displayColor();
    }
    displayColor(){
        document.getElementById("display").innerHTML = "";
        document.getElementById("wrapper").style.backgroundColor = this.records[this.records.length-1];
        document.getElementById("code").innerHTML = this.records[this.records.length-1];
        
        for(let i=this.records.length-1; i>=0; i--){
            // for(let i=0; i<this.records.length; i++){
                document.getElementById("display").innerHTML += `<div class="text">${this.records[i]}<div id="square"></div> </div>`
                document.getElementById("square").style.backgroundColor += this.records[i];
        }
        
    }
    getRandomNumber(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    getRecords(){
        this.records = JSON.parse(localStorage.getItem('colorGen'));
        // console.log(this.records);
    }
    reset(){
        this.records = [];
        localStorage.setItem('colorGen', JSON.stringify(this.records));
        document.getElementById("display").innerHTML = "";

    }
}
var color = new Color("HEX");

 
