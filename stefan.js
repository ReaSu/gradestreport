var gradecells = document.getElementsByClassName('grade');
var gradeheaders = document.getElementsByClassName('cell');

console.log('ASDFASDFASDFASDFA');
for (var j = 0; j < gradecells.length; j++) {
  gradecells[j].addEventListener('mouseover', highlightCell);
  gradecells[j].addEventListener('mouseout', highlightCellOff);
}

function highlightCell() {
  event.target.style.fontWeight = "bold";
  for (var i = 0; i < gradecells.length; i++) {
    if (gradecells[i].offsetTop == event.target.offsetTop) {
      gradecells[i].style.backgroundColor = "lightblue";
    }
    if (gradecells[i].offsetLeft == event.target.offsetLeft) {
      gradecells[i].style.backgroundColor = "lightblue";
    }
  }
}

function highlightCellOff() {
  event.target.style.fontWeight = "normal";
  for (var k = 0; k < gradecells.length; k++) {
    if (gradecells[k].offsetTop == event.target.offsetTop) {
      gradecells[k].style.backgroundColor = "none";
    }
    if (gradecells[k].offsetLeft == event.target.offsetLeft) {
      gradecells[k].style.backgroundColor = "none";
    }
  }
}
