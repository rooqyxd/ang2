import { Pipe, PipeTransform } from '@angular/core';
import { Score } from './highscore.service';

@Pipe({
  name: 'sorthttp',
  standalone: true,
})
export class SorthttpPipe implements PipeTransform {
  transform(values: Score[], sortByAscDesc: string): Score[] {
    if (!values || values.length === 0) {
      return [];
    }

    let sortedValues = [...values];

    if (sortByAscDesc === 'asc') {
      sortedValues.sort((a, b) => a.score - b.score);
    } else if (sortByAscDesc === 'desc') {
      sortedValues.sort((a, b) => b.score - a.score);
    }

    return sortedValues.slice(0, 10);
  }
}
