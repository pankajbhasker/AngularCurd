import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformat'
})
export class PhoneformatPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) { return ''; } else if (value.lenght > 10) {
      return;
    } else {
      const country = '+91';
      console.log(value);
      const city = value.slice(0, 3);
      console.log(city);
      const state = value.slice(3, 6);
      console.log(state);
      const phoneN = value.slice(6);
      console.log(phoneN);

      const phone = value.slice(0, 3) + '-' + state + '-' + phoneN;
      return country + '-' + phone;
    }
  }



}
