import '@angular/localize/init';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { addDecorator, moduleMetadata } from '@storybook/angular';

export const parameters = {
  controls: {
    expendad: true,
  },
  enableShortcuts: false,
  showPanel: true,
  panelPosition: 'right',
  viewMode: 'docs',
};

addDecorator(
  moduleMetadata({
    imports: [ReactiveFormsModule, FormsModule],
    providers: [],
  })
);
