import { Meta, Story } from '@storybook/angular/types-6-0';

import IconComponent from './icon.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Atoms/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent]
    })
  ]
} as Meta<IconComponent>;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args
})

export const logo = Template.bind({});
logo.argTypes = {
}
logo.args = {
  color: 'blush',
  type: 'oceanic-airlines'
}
