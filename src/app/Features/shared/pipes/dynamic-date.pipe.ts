import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamic-date',
})
export class DynamicDatePipe implements PipeTransform {
  transform(value: any, key: string): any {
    switch (key) {
      case 'createdAt':
      case 'updatedAt':
        return new Date(value).toLocaleDateString();
      default:
        return value;
    }
  }
}
