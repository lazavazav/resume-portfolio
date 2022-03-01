const Msg1 = document.querySelector('.z6');
const Msg2 = document.querySelector('.z7');
const Msg3 = document.querySelector('.z8');
const GoBack = document.querySelector('.successBtn');

setTimeout(function () {
  Msg1.style.display = 'block';
}, 1000);

setTimeout(function () {
  Msg2.style.display = 'block';
}, 2000);

setTimeout(function () {
  Msg3.style.display = 'block';
}, 5000);

setTimeout(function () {
  GoBack.style.display = 'block';
}, 7000);
