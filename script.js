var input = 0;

var david = false;

var isPlaying = false;
var audio = new Audio('enough.mp3');
var crop = document.getElementsByClassName('crop')[0];
var img = document.getElementById('pic');

document.body.addEventListener("keyup", addLetter)

function enableDavid(){
	david = true;
	crop.style.opacity = "1";
	img.addEventListener("click", magic);
	img.style.cursor = "pointer"
}

function addLetter(event){
	if(!david){
		var letter = String.fromCharCode(event.keyCode);
		switch(letter){
			case 'D':
				if(input == 0){
					input += 1;
				}
				else if(input == 4){
					enableDavid()
				}
				else{
					input = 1;
				}
				break;
			case 'A':
				if(input == 1){
					input += 1;
				}
				else{
					input = 0;
				}
				break;
			case 'V':
				if(input == 2){
					input += 1;
				}
				else{
					input = 0;
				}
				break;
			case 'I':
				if(input == 3){
					input += 1;
				}
				else{
					input = 0;
				}
				break;
			default:
				input = 0;
				break;
		}
	}
}

function magic(){
	if(!isPlaying){
		audio.play();
		img.setAttribute("src", "david.gif");
		img.style.width ="auto"
		img.style.height ="auto"
		img.style.margin = "0px"
		img.style.marginLeft = "-160px";
		isPlaying = true;
		img.style.cursor = "default"
		document.getElementsByTagName('h1')[0].innerHTML = "That's not too Bad !";
	}
}