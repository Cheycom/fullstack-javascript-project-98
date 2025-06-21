import  getRandomNumber from '../utils/random.js';
import runGame from '../index.js';

const description = '¿ Que número falta en la progresión?';

const generateRound = () => {
    const progressionLength = 10;
    const start = getRandomNumber (1 , 50);
    const step = getRandomNumber (2 , 10);
    const hiddenIndex = getRandomNumber (0 , progressionLength -1);
    
    const progression = [];
    for (let i = 0 ; i < progressionLength; i += 1){
        progression.push (start + i * step);
    }
        const correctAnswer = String (progression [hiddenIndex]);
        progression [hiddenIndex]= '..';
        const question = progression.join(' ');
        return [question, correctAnswer];
    };
    export default () => runGame (description, generateRound);
