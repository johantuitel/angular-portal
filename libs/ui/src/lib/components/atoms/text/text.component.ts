import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ColorType } from '../../particles/color.type';
import { FontSize } from '../../particles/font.type';

@Component({
  selector: 'ui-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent {

  /**
   * The text to be displayed
   */
  @Input() text = '';

  /**
   * Define the fillcolor for the icon @see ColorType
   */
  @Input() color: ColorType = 'black';

  /**
   * Define the size of the text @see FontSize
   */
  @Input() size: FontSize = 'regular';
}
