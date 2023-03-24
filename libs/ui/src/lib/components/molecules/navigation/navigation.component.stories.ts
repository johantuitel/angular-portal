import { Meta, Story } from '@storybook/angular/types-6-0';

import { AtomsModule } from '../../atoms/atoms.module';
import { NavigationComponent } from './navigation.component';
import { SharedModule } from './../../../../../../shared/src/lib/shared.module';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Molecules/Navigation',
  component: NavigationComponent,
  decorators: [
    moduleMetadata({
        imports: [
            AtomsModule, SharedModule
        ],
    }),
  ],
} as Meta<NavigationComponent>;

const Template: Story<NavigationComponent> = (args: NavigationComponent) => ({
  props: args
})

export const navigation = Template.bind({});
navigation.args = {
  links: [
    {label: 'Page One', value: 'page-one'},
    {label: 'Page Two', value: 'page-two'}
  ],
  navigationColor: 'sage',
  backgroundColor: 'black'
}
