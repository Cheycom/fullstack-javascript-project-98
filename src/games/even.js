import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  // 3 rondas exactas:
  for (let round = 1; round <= 3; round += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Pregunta: ${number}`);
    const answer = readlineSync.question('Tu respuesta: ').toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    // validar solo yes/no
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' no es una respuesta válida. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
    if (answer !== correctAnswer) {
      console.log(`'${answer}' Es incorrecto. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }

    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runEvenGame;