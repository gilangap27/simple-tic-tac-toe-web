const board = document.querySelector('.board');
const resetButton = document.querySelector('.reset');
const tabel = document.querySelectorAll('th')
let urutanJalan = 1;
const player1 = 'X';
const player2 = 'O';

board.addEventListener('click', function(e) {
    if (e.target.textContent == '') {
        if (urutanJalan % 2 == 0) {
            e.target.textContent = player2;
        } else {
            e.target.textContent = player1;
        }
        urutanJalan += 1;
    }
});

resetButton.addEventListener('click', function(e) {
    for (var i = 0; i < tabel.length; i++) {
        tabel[i].textContent = '';
        urutanJalan = 1;
    }
})

