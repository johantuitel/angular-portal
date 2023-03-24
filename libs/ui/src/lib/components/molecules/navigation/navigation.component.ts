import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ColorType } from '../../particles/color.type';
import { ILink } from './../../atoms/link/link';
import { Immutable } from '@oceanic-airlines/shared'
;

@Component({
  selector: 'ui-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  /**
   * Define the color for the links @see ColorType
   */
  @Input() navigationColor: ColorType = 'white';

  /**
   * Define the background color of the navigation @see ColorType
   */
  @Input() backgroundColor: ColorType = 'black';

  @Input() links: Immutable<Array<ILink>> = [];

  @Output() readonly navigate: EventEmitter<string> = new EventEmitter<string>();

  trackByIndex(index: number): number {
    return index;
  }

  navigateTo(event: string): void {
    this.navigate.emit(event);
  }
}
