var plus = document.getElementById("plusNum");
var minus = document.getElementById("minusNum");

plus.addEventListener('click', plusNum);
minus.addEventListener('click', minusNum);

var result = document.querySelector('h1');
var sum = 0;

document.getElementById("inputBox").value = 1;

function plusNum() {
  var num = parseFloat(document.getElementById('inputBox').value);
  sum += num;
  result.textContent =`${sum}`;
  if (sum < 0){
  result.style.color = 'red';
  } else {
    result.style.color = 'black';
    }
  };

function minusNum() {
    var num = parseFloat(document.getElementById('inputBox').value);
    sum -= num;
    result.textContent =`${sum}`;
    if (sum < 0){
    result.style.color = 'red';
    } else {
    result.style.color = 'black';
    }
  };