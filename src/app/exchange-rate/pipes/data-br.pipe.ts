import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEn: string): string {

    if(!dataEn){
      return '';
    }
    let newDate = new Date(dataEn);

    const dataBr = newDate.toLocaleString().split(' ');
    const timeBr = dataBr[1].split(':');

    return dataBr[0] + ' - ' + timeBr[0] + 'h' + timeBr[1]

  }

}
