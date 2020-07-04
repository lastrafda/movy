import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '../../../environments/environment';

@Pipe({
  name: 'backdropImage'
})
export class BackdropImagePipe implements PipeTransform {

  transform(fileName: string): string {
    // TODO: refactoring this might be a good idea but I'm ok with this
    return `${environment.movieIMGURL}w300${fileName} 300w, ${environment.movieIMGURL}w780${fileName} 780w, ${environment.movieIMGURL}w1280${fileName} 1280w`;
  }

}
