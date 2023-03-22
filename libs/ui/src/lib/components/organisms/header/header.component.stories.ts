import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { AtomsModule } from './../../atoms/atoms.module';
import { HeaderComponent } from './header.component';

export default {
  title: 'Organisms/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
        imports: [
            AtomsModule,
        ],
    }),
],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args
})

export const header = Template.bind({});
header.args = {
  logo: 'oceanic-airlines',
  logoColor: 'blush',
  backgroundColor: 'white',
  title: 'oceanic airlines'
}
