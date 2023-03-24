import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {Breadcrumb} from './breadcrumb';
import { ColorType } from '../../particles/color.type';

@Component({
  selector: 'ui-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {

  /**
   * Define the fillcolor for the icon @see ColorType
   */
  @Input() color: ColorType = 'black';
  @Input() breadcrumbs: Breadcrumb[] = [];
  @Output() navigateClicked: EventEmitter<string> = new EventEmitter<string>();

  trackByIndex(index: number): number {
    return index;
  }

  navigate(path: string): void {
    this.navigateClicked.emit(path);
  }
}
