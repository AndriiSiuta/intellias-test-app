import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { IUsersEntity } from '../../users.service';

@Component({
  selector   : 'users',
  templateUrl: './users.component.html',
  styleUrls  : ['./users.component.scss']
})
export class UsersComponent {
  @Input() users: IUsersEntity[];
  @Input() isTablet: boolean;
  @Output() toModalClick = new EventEmitter<IUsersEntity>();

  onClick(user: IUsersEntity) {
    this.toModalClick.next(user);
  }

  constructor() {
  }

  trackByFn(index) {
    return index;
  }
}
