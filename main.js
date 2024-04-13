function preload() {   
}
    
function setup() {
canvas = createCanvas(600,400);
canvas.position(110,250);
video = createCapture(VIDEO);  
video.hide();

tint_color = "";
}
    
function draw() {
   image(video, 0 , 0, 600, 400);
   fill(255, 204, 100);
   rect(0, 0, 600, 30);
   rect(0, 370, 600, 30);
   rect(0, 0, 30, 400);
   rect(570, 0, 30, 400);
   fill('red');
   circle(28, 30, 60);
   circle(570, 30, 60);
   circle(28, 375, 60);
   circle(570, 375, 60);
}

function take_snapshot() {
   save('framed_image.png');
}

function filter_tint() 
{
  tint_color = document.getElementById("color_name").value;
}
 