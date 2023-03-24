import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ColorType } from './../../particles/color.type';

@Component({
  selector: 'ui-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {
  /**
   * The value to be emitted after the link is clicked.
   */
  @Input() value!: string;

  /**
   * Text of the link
   */
  @Input() label!: string;

  /**
   * The theme of the link @see ColorType
   */
  @Input() color: ColorType = 'black';

  @Output() readonly clickEmitter: EventEmitter<string> = new EventEmitter<string>();

  link(event: string): void {
    this.clickEmitter.emit(event);
  }
}
