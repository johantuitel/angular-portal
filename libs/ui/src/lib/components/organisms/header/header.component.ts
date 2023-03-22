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
  @HostBinding('class') hostClass: string;

  /**
   * Define the background-color for the header @see ColorType
   */
  @Input() backgroundColor: ColorType;

  /**
   * Which logo to use in the header @see IconNames
   */
  @Input() logo: IconNames;

  /**
   * Define the logo-color @see ColorType
   */
  @Input() logoColor: ColorType;

  /**
   * Which logo to use in the header @see IconNames
   */
  @Input() title = '';

  ngOnInit(): void {
    this.hostClass = this.backgroundColor.toString();
  }
}
