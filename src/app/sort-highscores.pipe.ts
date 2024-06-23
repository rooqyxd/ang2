import { Pipe, PipeTransform } from '@angular/core';
interface Highscores {
  score: number;
  time: number;
  minutes: string;
  seconds: string;
}
@Pipe({
  name: 'sortHighscores',
  standalone: true,
})
export class SortHighscoresPipe implements PipeTransform {
  transform(
    values: Array<Highscores>,
    sortBy: string,
    sortByAscDesc: string
  ): Array<Highscores> {
    let tempValues = values;
    if (!sortBy) {
      return values;
    } else if (sortBy === 'score' && sortByAscDesc === 'asc') {
      return tempValues.sort((a, b) => b.score - a.score);
    } else if (sortBy === 'time' && sortByAscDesc === 'asc') {
      return tempValues.sort((a, b) => b.time - a.time);
    } else if (sortBy === 'time' && sortByAscDesc === 'desc') {
      return tempValues.sort((a, b) => a.time - b.time);
    } else if (sortBy === 'score' && sortByAscDesc === 'desc') {
      return tempValues.sort((a, b) => a.score - b.score);
    } else {
      return values;
    }
  }
}
