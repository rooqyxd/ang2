import { Pipe, PipeTransform } from '@angular/core';
interface MoveHistory {
  moves: string;
  times: number;
}
@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(
    values: Array<MoveHistory>,
    searchText: string
  ): Array<MoveHistory> {
    if (!searchText) {
      return values;
    }

    return values.filter((move) => move.moves.includes(searchText));
  }
}
