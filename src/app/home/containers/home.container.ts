import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector       : 'home-container',
  templateUrl    : './home.container.html',
  styleUrls      : ['./home.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeContainer {}
