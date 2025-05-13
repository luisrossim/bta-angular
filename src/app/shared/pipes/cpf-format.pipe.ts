import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFormat'
})
export class CpfFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const digits = value.replace(/\D/g, '');

    if(digits.length == 11){
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`
    }

    return value;
  }

}
