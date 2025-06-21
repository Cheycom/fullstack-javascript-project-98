import runGame from '../index.js';
const description = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';

const isPrime   = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1){
        if (num % i === 0) return false;
    }
    return true;
};

const generateRound =() => {
    const number = Math.floor (Math.random()*100)+2;
    const correctAnswer = isPrime (number) ? 'yes' : 'no';
    return [number.toString(), correctAnswer];
};
export default () => runGame(description, generateRound);