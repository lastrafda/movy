import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../../environments/environment';

@Pipe({
  name: 'posterImage'
})
export class PosterImagePipe implements PipeTransform {
  // TODO: I don't know if I'll use srcset on my img tag, so this might change in the future.
  transform(fileName: string, ): string {
    return `${environment.movieIMGURL}w342${fileName}`;
  }
}
