let count = 0;

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn')

incrementButton.addEventListener('click',function(){
			alert(count);
			count++;
	counterElement.textContent = count;
});
