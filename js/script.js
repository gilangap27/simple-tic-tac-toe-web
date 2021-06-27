const board = document.querySelector('.board');
const resetButton = document.querySelector('.reset');
const tabel = document.querySelectorAll('th');
const ket = document.querySelector('.ket');
let urutanJalan = 1;
let berhenti = false;
let pemenang = '';
let click = 0;

board.addEventListener('click', function(e) {
    if (e.target.textContent == '' && berhenti == false) {
        if (urutanJalan % 2 == 0) {
            e.target.textContent = 'O';
            pemenang = e.target.textContent;
            click += 1;
        } else {
            e.target.textContent = 'X';
            pemenang = e.target.textContent;
            click += 1;
        }
        urutanJalan += 1;
    }

    // Aturan Main (Manual)
    if (tabel[0].textContent != '' && tabel[0].textContent == tabel[1].textContent && tabel[2].textContent == tabel[1].textContent && berhenti == false) {
        ket.textContent = 'Pemenang : '+pemenang;
        berhenti = true;
    } else if (tabel[3].textContent != '' && tabel[3].textContent == tabel[4].textContent && tabel[5].textContent == tabel[4].textContent && berhenti == false) {
        ket.textContent = 'Pemenang : '+pemenang;
        berhenti = true;
    } else if (tabel[6].textContent != '' && tabel[6].textContent == tabel[7].textContent && tabel[8].textContent == tabel[7].textContent && berhenti == false) {
        ket.textContent = 'Pemenang : '+pemenang;
        berhenti = true;
    } else if (tabel[0].textContent != '' && tabel[0].textContent == tabel[4].textContent && tabel[8].textContent == tabel[4].textContent && berhenti == false) {
        ket.textContent = 'Pemenang : '+pemenang;
        berhenti = true;
    } else if (tabel[2].textContent != '' && tabel[2].textContent == tabel[4].textContent && tabel[6].textContent == tabel[4].textContent && berhenti == false) {
        ket.textContent = 'Pemenang : '+pemenang;
        berhenti = true;
    } else if (tabel[0].textContent != '' && tabel[0].textContent == tabel[3].textContent && tabel[6].textContent == tabel[3].textContent && berhenti == false) {
        ket.textContent = 'Pemenang : '+pemenang;
        berhenti = true;
    } else if (tabel[1].textContent != '' && tabel[1].textContent == tabel[4].textContent && tabel[7].textContent == tabel[4].textContent && berhenti == false) {
        ket.textContent = 'Pemenang : '+pemenang;
        berhenti = true;
    } else if (tabel[2].textContent != '' && tabel[2].textContent == tabel[5].textContent && tabel[8].textContent == tabel[5].textContent && berhenti == false) {
        ket.textContent = 'Pemenang : '+pemenang;
        berhenti = true;
    } else if(click == 9) {
        ket.textContent = 'SERI';
        click = 0;
    }


});

resetButton.addEventListener('click', function(e) {
    for (var i = 0; i < tabel.length; i++) {
        tabel[i].textContent = '';
        urutanJalan = 1;
        berhenti = false;
        click = 0;
        ket.textContent = '';
    }
})