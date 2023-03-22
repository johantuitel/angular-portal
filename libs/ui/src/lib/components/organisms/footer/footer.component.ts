import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

import { ColorType } from '../../particles/color.type';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent  implements OnInit {
  @HostBinding('class') hostClass: string;

  /**
   * Define the background-color for the header @see ColorType
   */
  @Input() backgroundColor: ColorType;

  ngOnInit(): void {
    this.hostClass = this.backgroundColor.toString();
  }
}
