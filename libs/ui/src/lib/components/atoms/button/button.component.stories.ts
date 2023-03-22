import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { AtomsModule } from '../../atoms/atoms.module';
import { ButtonComponent } from './button.component';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
        imports: [
            AtomsModule,
        ],
    }),
],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args
})

export const button = Template.bind({});
