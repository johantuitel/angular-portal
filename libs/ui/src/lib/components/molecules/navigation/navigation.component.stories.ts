import { Meta, Story } from '@storybook/angular/types-6-0';

import { AtomsModule } from '../../atoms/atoms.module';
import { NavigationComponent } from './navigation.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Molecules/Navigation',
  component: NavigationComponent,
  decorators: [
    moduleMetadata({
        imports: [
            AtomsModule,
        ],
    }),
  ],
} as Meta<NavigationComponent>;

const Template: Story<NavigationComponent> = (args: NavigationComponent) => ({
  props: args
})

export const navigation = Template.bind({});
