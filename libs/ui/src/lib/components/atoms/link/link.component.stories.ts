import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { AtomsModule } from '../../atoms/atoms.module';
import { LinkComponent } from './link.component';

export default {
  title: 'Atoms/Link',
  component: LinkComponent,
  decorators: [
    moduleMetadata({
        imports: [
            AtomsModule,
        ],
    }),
],
} as Meta<LinkComponent>;

const Template: Story<LinkComponent> = (args: LinkComponent) => ({
  props: args
})

export const link = Template.bind({});
link.args = {
  color: 'light-coral',
  label: 'Link',
  value: 'abc123'
}
