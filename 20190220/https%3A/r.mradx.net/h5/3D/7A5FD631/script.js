(function(window, undefined){


	window.onload = init;


	function init(event){

		var eventFocus = typeof window.onmouseenter !== 'undefined' ? 'mouseenter' : 'mouseover';
		var eventBlur = typeof window.onmouseleave !== 'undefined' ? 'mouseleave' : 'mouseout';

		document.body.addEventListener(eventFocus, togglePointer);
		document.body.addEventListener(eventBlur, togglePointer);
		document.body.addEventListener(eventFocus, showButton);
		document.body.addEventListener('mousemove', movePointer);
		
		document.body.addEventListener(eventFocus, onStageFocus);
		document.body.addEventListener(eventBlur, onStageBlur);
	};


	function movePointer(event){

		var x= event.clientX;
		var y = event.clientY;

		var pointer = document.querySelector('.pointer');
		var arrows = document.querySelector('.arrows');

		var position = {
			top: y - (pointer.clientHeight / 2) + 'px',
			left: x - (pointer.clientWidth / 2) + 'px'
		}

		pointer.style.top = position.top;
		pointer.style.left = position.left;

		arrows.style.top = position.top;
		arrows.style.left = position.left;
	};

	function showButton(event){

		var btn = document.querySelector('.animation__button');

		btn.classList.add('animation__button--active');
	};

	function togglePointer(event){

		var action = (event.type === 'mouseleave' || event.type === 'mouseout');

		var pointer = document.querySelector('.pointer');
		var arrows = document.querySelector('.arrows');
		var btn = document.querySelector('.animation__button');


		if (pointer.classList.contains('pointer--inited')) {
			pointer.classList.remove('pointer--inited');
		}

		btn.textContent = action ? 'Стреляй' : 'Играй';

		pointer.classList.toggle('pointer--disabled', action);
		arrows.classList.toggle('arrows--disabled', action);
	};

	document.getElementById("mcLogo").style.animationPlayState = "paused";
	document.getElementById("e01").style.animationPlayState = "paused";
	document.getElementById("e02").style.animationPlayState = "paused";
	//document.getElementById("mcBtn").style.animationPlayState = "paused";
	
	//document.styleSheets[0].addRule('animation__button:before','animation-play-state: running;');
	document.getElementsByClassName('animation__button')[0].style.animationPlayState = "paused";
	
	
	
	function onStageFocus(){
		//alert("asa");
		
		document.getElementById("mcLogo").style.animationPlayState = "running";
		document.getElementById("e01").style.animationPlayState = "running";
		document.getElementById("e02").style.animationPlayState = "running";
		
		//document.getElementById("mcBtn").style.animationPlayState = "running";
		//document.getElementsByClassName('animation__button:before')[0].style.display = 'block';
		var element = document.getElementById("mcBtn");
		element.classList.toggle("animation__button02");
		
	}
	
	function onStageBlur(){
		document.getElementById("mcLogo").style.animationPlayState = "paused";
		document.getElementById("e01").style.animationPlayState = "paused";
		document.getElementById("e02").style.animationPlayState = "paused";
		
		var element = document.getElementById("mcBtn");
		element.classList.toggle("animation__button02");
	}
	
})(window);