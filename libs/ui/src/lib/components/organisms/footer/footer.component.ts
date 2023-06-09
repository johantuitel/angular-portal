import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

import { ColorType } from '../../particles/color.type';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent  implements OnInit {
  @HostBinding('class') hostClass = 'white';

  /**
   * Define the background-color for the footer @see ColorType
   */
  @Input() backgroundColor: ColorType = 'black';

    /**
   * Define the font-color for the footer @see ColorType
   */
    @Input() fontColor: ColorType = 'black';

  ngOnInit(): void {
    this.hostClass = this.backgroundColor.toString();
  }
}
