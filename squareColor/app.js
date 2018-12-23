var div = document.getElementById('box');

div.style.height = '500px';
div.style.width = '500px';
div.style.background = 'skyblue';

div.addEventListener('click',function(){
	if(div.style.background == 'skyblue')
		div.style.background = 'red';

	else if(div.style.background == 'red')
		div.style.background = 'green';

	else if(div.style.background == 'green')
		div.style.background = 'skyblue';

})