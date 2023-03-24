import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

import { ColorType } from '../../particles/color.type';
import { IconNames } from './../../../assets/src/libs/icons/icon';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') hostClass = 'white';

  /**
   * Define the background-color for the header @see ColorType
   */
  @Input() backgroundColor: ColorType = 'black'

  /**
   * Which logo to use in the header @see IconNames
   */
  @Input() logo: IconNames = 'oceanic-airlines'

  /**
   * Define the logo-color @see ColorType
   */
  @Input() logoColor: ColorType = 'black'

  /**
   * The Title in the header
   */
  @Input() title = '';

  ngOnInit(): void {
    this.hostClass = this.backgroundColor.toString();
  }
}
