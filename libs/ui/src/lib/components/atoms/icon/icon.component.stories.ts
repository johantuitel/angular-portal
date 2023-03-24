import { Meta, Story } from '@storybook/angular/types-6-0';

import { IconComponent } from './icon.component';

export default {
  title: 'Atoms/Icon',
  component: IconComponent,
} as Meta<IconComponent>;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args
})

export const icon = Template.bind({});
icon.args = {
  color: 'blush',
  type: 'oceanic-airlines'
}
