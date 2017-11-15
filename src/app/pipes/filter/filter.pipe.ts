import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return [];
    if (!args) return value;
    args = args.toLowerCase();
    return value.filter(it => {
      return it.name.toLowerCase().includes(args);
    });
  }

}
