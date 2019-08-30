var main_blok = document.getElementById('main_blok');
var spinner = document.getElementById('spinner');

var stop = document.getElementById('stop');

stop.addEventListener('click', function(){
	//deg = 0;
    speed = 0;
    start = false;
    clearInterval(interval_vlue);
})

spinner.addEventListener('click', spin);

var deg = 0;
var speed = 0;
var start = false;
var interval_vlue = 0;

function spin(){	    
	    speed += 2;
        if(start == false){    //if start == false 
           start = true;
           var interval = setInterval(function(){	    	
		   deg += speed;
		   if(deg == 360){
			deg = 0;
		  }		  
		  spinner.style.transform = `rotate(${deg}deg)`;		  
        }, 1000 / 35)
        interval_vlue++;	    
     }  
  }  


var spinners = ['ball.png', 'colored_round.png', 'dark_blue.png', 'dark_green_snake.png', 'green.png', 'metalik_blue_dark.png', 'red.png', 'red_blue.png'];
var select_spinner = document.getElementById('select_spinner');

for(let x = 0; x < spinners.length; x++){
	var option = document.createElement('option');
	option.innerHTML = spinners[x];
	select_spinner.appendChild(option);
}


select_spinner.addEventListener('change', function(){
	spinner.src = 'src/' + select_spinner.value;
})



var file = document.getElementById('file');
file.addEventListener('change', loadFile);

function loadFile(){
	let loadedFile = file.files[0];
	var url = URL.createObjectURL(loadedFile);
	spinner.src = url;
}