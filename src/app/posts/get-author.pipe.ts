import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { IUsersEntity } from '../users/users.service';

@Pipe({
  name: 'author'
})

export class GetAuthorPipe implements PipeTransform {
  transform(id: number, users: IUsersEntity[]): any {
    const author = users.find((user) => user.id === id);

    return author !== undefined ? author.username : 'My post';
  }
}
