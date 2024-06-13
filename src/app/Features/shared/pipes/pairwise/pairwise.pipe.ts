import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pairwise' })
export class PairwisePipe implements PipeTransform {
  transform(arr: any[]): any[][] {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) {
      pairs.push(arr.slice(i, i + 2));
    }
    return pairs;
  }
}
