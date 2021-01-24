import './index.css';
import pizza from './assets/images/pizza.jpg';

// index.js
// создаем элемент заголовка
const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

// добавляем заголовок в DOM
const root = document.querySelector('#root');
root.append(heading);

const image = document.createElement('img');
image.src = pizza;

root.append(image);

function foo() {
  console.log('Hello world');
}

foo();

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();
// //////////////////////////////////////////////////////////////////////////////////////////////////////
function addOne(val) {
  return val + 1;
}
function mulTwo(val) {
  return val * 2;
}

function compose(...args) {
  let val = args[0];

  if (args.length < 2) {
    return val;
  }

  for (let i = 1; i < args.length; i++) {
    val = args[i](val);
  }

  return val;
}

console.log(compose(5, addOne, mulTwo));
