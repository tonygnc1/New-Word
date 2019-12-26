// window.addEventListener('load', init);
const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');
const button = document.querySelector('button');
// let button1 = document.querySelector('button1');
const game = document.querySelector('.game');
const myWords = [
  'Alphabet',
  'Football',
  'carolina',
  'flashlight',
  'notebook',
  'spiral',
  'flooring',
  'nation'
];

button.addEventListener('click', start);

let cur = 0;
let startTime;

// function init() {
//   let div = document.createElement('div');
//   div.setAttribute('class', 'message');
//   div.innerText = 'Press the Start Button';
//   document.body.appendChild(div);
//   let button = document.createElement('button');
//   button.type = 'button';
//   button.innerText = 'Start Game';
//   button.addEventListener('click', start);
//   document.body.appendChild(button);
//   let div1 = document.createElement('div');
//   div1.classList.add('game');
//   document.body.appendChild(div1);
//   console.log('ready');
// }

function start() {
  document.querySelector('.message1').innerHTML = '';

  cur = 0;
  startTime = Date.parse(new Date());
  this.style.display = 'none';
  let tempArr = myWords.slice(0);
  tempArr.sort(function(a, b) {
    return 0.5 - Math.random();
  });

  myWords.sort(function(a, b) {
    return 0.5 - Math.random();
  });

  const game = document.querySelector('.game');
  tempArr.forEach(function(item) {
    let temp = item.split('');
    // console.log(temp);
    temp.sort(function(a, b) {
      return 0.56 - Math.random();
    });

    let temp1 = temp.join('');
    let div = document.createElement('div');
    div.innerText = 'Select';
    div.classList.add('box');
    div.style.backgroundColor = 'red';
    div.word = item;
    div.addEventListener('mouseenter', function() {
      div.style.backgroundColor = 'white';
      div.innerText = temp1;
      console.log(item);
    });
    div.addEventListener('mouseleave', function() {
      div.style.backgroundColor = 'red';
      div.innerText = 'Select';
    });
    div.addEventListener('click', function() {
      if (div.word === myWords[cur]) {
        this.classList.add('hidden');
        cur++;
        nextWord();
      } else {


        // Second button and message1

        
        document.querySelector('.message').innerHTML = '';
        document.querySelector('.game').innerHTML = '';
        message1.innerHTML = 'Sorry - Game Over';
        let button1 = document.createElement('button1');
        button1.type = 'button';
        button1.innerHTML = 'Start New Game';
        button1.addEventListener('click', start);
        document.body.appendChild(button1);
      }
    });
    game.appendChild(div);
  });
  nextWord();
}

function nextWord() {
  if (cur >= myWords.length) {
    let endTime = Date.parse(new Date());
    let duration = (endTime - startTime) / 1000;
    document.querySelector('.game').innerHTML = '';

    document.querySelector('button').style.display = 'block';


    // message2.innerHTML='Game Over, it took '+ duration + ' seconds';


    message('Game Over, it took ' + duration + ' seconds');
  } else {
    message('Select this Word - ' + myWords[cur]);
  }
}

function message(output) {
  document.querySelector('.message').innerHTML = output;
}

// function message2(output) {
//   document.querySelector('.message2').innerHTML = output;
// }
