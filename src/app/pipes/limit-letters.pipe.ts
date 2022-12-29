import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitLetters'
})
export class LimitLettersPipe implements PipeTransform {

  transform(value: any, limit:number): string {
    let x= value.split('').slice(0,limit).join('');
    if(value.length > 16 ){
      return `${x}...`;
    }else{
      return x;
    }
  }

}
