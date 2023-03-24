import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IconNames, IconsRegistryService } from '../../../assets/src/libs';

import { ColorType } from './../../particles/color.type';
import { SizeType } from './../../particles/size.type';

@Component({
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {

  /**
   * Define the fillcolor for the icon @see ColorType
   */
  @Input() color: ColorType = 'black';

  /**
   * Add custom css styling
   */
  @Input() css!: string;

  /**
   * Determine the size for the icon @see SizeType, default is regular
   */
  @Input() size: SizeType = 'regular';

  /**
   * The name of the icon to be displayed
   */
  @Input() type: IconNames = 'oceanic-airlines';

  constructor(private readonly element: ElementRef,
              private readonly iconsRegistry: IconsRegistryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { type } = changes;

    if (type) {
      const i: HTMLElement | null = this.element.nativeElement.querySelector('i');

      if (i) {
        const svg = this.iconsRegistry.getIcon(type.currentValue) ?? '';

        this.element.nativeElement.querySelector('i').innerHTML = svg;
      }
    }
  }


}
