#!/usr/bin/env node

import getUserName from '../src/cli.js';
import runCalcGame from '../src/games/calc.js';

const userName = getUserName();
runCalcGame(userName);