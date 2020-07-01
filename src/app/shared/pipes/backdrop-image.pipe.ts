import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BackdropSizes} from '../enums/backdrop-sizes.enum';

@Pipe({
  name: 'backdropImage'
})
export class BackdropImagePipe implements PipeTransform {

  transform(fileName: string, size: BackdropSizes): string {
    return `${environment.movieIMGURL}${size}/${fileName}`;
  }

}
