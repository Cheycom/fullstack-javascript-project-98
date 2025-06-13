import readlineSync from 'readline-sync';
import getUserName from '../cli.js';
import getRandomNumber from '../utils/random.js';

const operators = ['+', '-', '*'];
const roundsCount = 3;

const runCalcGame = () => {
  //const userName = getUserName ();
  console.log('¿Cuál es el resultado de la expresión?');

  let correctAnswers = 0;

  while (correctAnswers < roundsCount) {
    const num1 = getRandomNumber(1, 50);
    const num2 = getRandomNumber(1, 50);
    const operator = operators[getRandomNumber(0, operators.length - 1)];

    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        throw new Error(`Operador desconocido: ${operator}`);
    }

    console.log(`Pregunta: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo!`);
      return;
    }
  }

  console.log(`¡Felicitaciones!`);
};

export default runCalcGame;