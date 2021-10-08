import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase',
})

export class SentenceCasePipe implements PipeTransform {
  public transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
  }
}
