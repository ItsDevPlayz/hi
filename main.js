
var canvas=new fabric.Canvas('myCanvas');
ctx=canvas.getContext("2d");

ball_y=0;
ball_x=0;
hole_x=400;
hole_y=800;
hole_width=80;
hole_height=80;

block_image_width = 5;
block_image_height = 5;
ball_image="ball.png";
hole_image="golf-h.png"

function load_img(){
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=ball_image;
	
	rover_imgTag=new Image();
	rover_imgTag.onload=uploadrover;
	rover_imgTag.src=hole_image;
	}
	
	function uploadBackground(){
	ctx.drawImage(background_imgTag, 0, 0, 80, 80);
	}
	function uploadrover(){
		ctx.drawImage(rover_imgTag, hole_x, hole_y,  hole_width, hole_height );
	}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj=Img;
	ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(ball_obj);
			});
		
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball_obj);
	document.getElementById("hd3").innerHTML="You Have Hit The Goal!!";
	document.getElementById("myCanvas").style.borderColor="red";
}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0){
        ball_y=ball_y-block_image_height;
console.log("block image height = " + block_image_height);
console.log("When Up Arrow Key Is Pressed, X = "+ ball_x + ", Y= "+ball_y);
canvas.remove(ball_obj);
new_image();
		}
	}

	function down()
	{
		if(ball_y<450){
			ball_y=ball_y+block_image_height;
	console.log("block image height = " + block_image_height);
	console.log("When Down Arrow Key Is Pressed, X = "+ ball_x + ", Y= "+ball_y);
	canvas.remove(ball_obj);
	new_image();
			}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-block_image_width;
	console.log("block image width = " + block_image_width);
	console.log("When Left Arrow Key Is Pressed, X = "+ ball_x + ", Y= "+ball_y);
	canvas.remove(ball_obj);
	new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_image_width;
	console.log("block image width = " + block_image_width);
	console.log("When Right Arrow Key Is Pressed, X = "+ ball_x + ", Y= "+ball_y);
	canvas.remove(ball_obj);
	new_image();
		}
	}
	
}

