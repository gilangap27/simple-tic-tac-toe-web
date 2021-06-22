

const board = document.querySelector('.board');
let i = 1;

board.addEventListener('click', function(e){
	if(i % 2 == 0){
		e.target.textContent = 'O';
	} else {
		e.target.textContent = 'X';
	}
	i += 1;
});