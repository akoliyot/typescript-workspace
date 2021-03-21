import { MatchReader } from './inheritance/MatchReader';
import { MatchResult } from './MatchResult';

const matches = new MatchReader('football.csv');
matches.read();

let manUnitedWins = 0;

for (let match of matches.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);