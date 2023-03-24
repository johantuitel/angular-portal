import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ColorType } from '../../particles/color.type';

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

  @Output() readonly navigate: EventEmitter<string> = new EventEmitter<string>();

  navigateTo(event: string): void {
    this.navigate.emit(event);
  }
}
