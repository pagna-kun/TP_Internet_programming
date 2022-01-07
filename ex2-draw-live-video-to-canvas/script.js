//play and pause button display
var playing = true;
document.getElementById("buttonPlay").addEventListener("click", playPause);

function playPause(){
    if(playing){
        playing = false;
        document.getElementById("buttonPlay").addEventListener("click", loop);
        document.getElementById("buttonPlay").innerHTML = "Play";
    }else{
        playing = true;
        document.getElementById("buttonPlay").innerHTML = "Pause";
        document.getElementById("buttonPlay").addEventListener("click",clearImage)
        // document.getElementById("canvasVideo").style.backgroundColor = "white";
    }
}

//access the camera
var video = document.createElement("video");
video.autoplay = true;

navigator.mediaDevices.getUserMedia({
    audio:false, video:true
}).then((stream) => {
    video.srcObject = stream;
}).catch((err) => {
    console.log("navigator.MediaDevices.getUeredia error: ", err.message, err.name);
});

//loop drawing
var canvas = document.getElementById('canvasVideo');
var ctx = canvas.getContext('2d');

function loop(){
    if(playing){
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setTimeout(loop, 1000/30); //video 30fps
    }
}
function clearImage(){
    if(!playing){
        ctx.clearRect(0, 0, canvas.width, canvas.height);   
    }
}