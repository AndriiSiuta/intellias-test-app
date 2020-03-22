import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { IUser } from '../../authentication/authentication.service';

@Component({
  selector       : 'home',
  templateUrl    : './home.component.html',
  styleUrls      : ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent {
  @Input() user: IUser;
  @Output() navigateClick = new EventEmitter();

  onNavigateClick() {
    this.navigateClick.next();
  }
}
