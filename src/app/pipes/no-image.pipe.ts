import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any[]): any {

    if(value == null){
      return "../../assets/images/image.jpg"
      
    }
    console.log(value)
    return value;
  }

}
