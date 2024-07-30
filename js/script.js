const heroWord = document.getElementById('hero');
const showCells = document.querySelectorAll('.hov-show');
const hideCells = document.querySelectorAll('.hov-hide');
const brNoneCells = document.querySelectorAll('.hov-br-none');
const brBrCells = document.querySelectorAll('.hov-br-br');
const brBlCells = document.querySelectorAll('.hov-br-bl');
const brTlCells = document.querySelectorAll('.hov-br-tl');
const brTrCells = document.querySelectorAll('.hov-br-tr');

const tittle = document.getElementById('tittle');

console.log(showCells)

heroWord.onmouseover = function() {

    showCells.forEach((cell) => {
        cell.classList.add('show');
    })
    
    hideCells.forEach((cell) => {
        cell.classList.add('hide');
    })

    for(let brNoneCell of brNoneCells) {
        brNoneCell.classList.add('br-none');
    }

    for(let brBrCell of brBrCells) {
        brBrCell.classList.add('br-br');
    }

    for(let brBlCell of brBlCells) {
        brBlCell.classList.add('br-bl');
    }

    for(let brTlCell of brTlCells) {
        brTlCell.classList.add('br-tl');
    }

    for(let brTrCell of brTrCells) {
        brTrCell.classList.add('br-tr');
    }

    tittle.classList.add('br-all');
}

heroWord.onmouseout = function() {
    showCells.forEach((cell) => {
        cell.classList.remove('show')
    })

    hideCells.forEach((cell) => {
        cell.classList.remove('hide');
    })

    for(let brNoneCell of brNoneCells) {
        brNoneCell.classList.remove('br-none');
    }

    for(let brBrCell of brBrCells) {
        brBrCell.classList.remove('br-br');
    }

    for(let brBlCell of brBlCells) {
        brBlCell.classList.remove('br-bl');
    }

    for(let brTlCell of brTlCells) {
        brTlCell.classList.remove('br-tl');
    }

    for(let brTrCell of brTrCells) {
        brTrCell.classList.remove('br-tr');
    }


    tittle.classList.remove('br-all');
}
