canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="blue";
widthofLine=5;
var mouseEvent="empty";

canvas.addEventListener("mousedown",mymouseDown);
function mymouseDown(e){
    color=document.getElementById("colour").value;
         console.log(colour);
         widthofLine=document.getElementById("widthofline").value;
         console.log(widthofLine);
    mouseEvent="mouseDown";
   }

   canvas.addEventListener("mouseup",mymouseUp);
function mymouseUp(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",mymouseLeave);
function mymouseLeave(e){
    mouseEvent="mouseLeave ";
}

canvas.addEventListener("mousemove", mymouseMove);
function mymouseMove(e){
    current_position_of_X=e.clientX-canvas.offsetLeft;
    current_position_of_Y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofLine;
        ctx.moveTo(last_position_of_X,last_position_of_Y);
        ctx.lineTo(current_position_of_X,current_position_of_Y);
        ctx.stroke();
    }
    last_position_of_X=current_position_of_X;
    last_position_of_Y=current_position_of_Y;
}

canvas.addEventListener("touchstart", mytouchStart);
function mytouchStart(e){
    last_position_of_X=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_Y=e.touches(0).clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", mytouchMove);
function mytouchMove(e){
    current_position_of_X=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_Y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=widthofLine;
    ctx.moveTo(last_position_of_X, last_position_of_Y);
    ctx.lineTo(current_position_of_X, current_position_of_Y);
    ctx.stroke();
    last_position_of_X=current_position_of_X;
    last_position_of_Y=current_position_of_Y;

}