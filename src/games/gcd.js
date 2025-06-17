import readlineSync from 'readline-sync';
import getUserName from '../cli.js';
import getRandomNumber from '../utils/random.js';

const roundsCount = 3;

const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const runGcdGame = () => {
  const userName = getUserName();  
  console.log('¿Cuál es el máximo común divisor de los siguientes números?');

  let correctAnswers = 0;

  while (correctAnswers < roundsCount) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const correctAnswer = getGCD(num1, num2);

    console.log(`Pregunta: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default runGcdGame;