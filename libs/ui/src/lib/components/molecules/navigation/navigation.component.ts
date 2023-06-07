import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AlignmentType } from '../../particles/alignment.type';
import { ColorType } from '../../particles/color.type';
import { DirectionType } from './../../particles/direction.type';
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

  /**
   * Define the direction of the navigation, by default it will be horizontal @see DirectionType.
   */
  @Input() direction: DirectionType = 'horizontal';

  /**
   * Define the alignement of the navigation items, by default it will be left @see AlignmentType.
   */
  @Input() align: AlignmentType = 'left';

  /**
   * List of the links @see ILink
   */
  @Input() links: Immutable<Array<ILink>> = [];

  @Output() readonly navigate: EventEmitter<string> = new EventEmitter<string>();

  trackByIndex(index: number): number {
    return index;
  }

  navigateTo(event: string): void {
    this.navigate.emit(event);
  }
}
