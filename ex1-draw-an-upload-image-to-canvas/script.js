var canvas = document.getElementById('canvasImg');
var ctx = canvas.getContext('2d');
var imageLoader = document.getElementById('uploadImg');
imageLoader.addEventListener('change', handleImage);

function handleImage(imageLoader) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(imageLoader.target.files[0]);
}