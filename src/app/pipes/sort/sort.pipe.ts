import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return value;
    if (args) {
      return value.sort((a, b) => {
        return a.price - b.price
      })
    }
    return value.sort((a, b) => {
      return b.price - a.price
    })
  }

}
