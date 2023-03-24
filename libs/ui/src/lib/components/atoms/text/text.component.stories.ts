import { Meta, Story } from '@storybook/angular/types-6-0';

import { TextComponent } from './text.component';

export default {
  title: 'Atoms/Text',
  component: TextComponent,
} as Meta<TextComponent>;

const Template: Story<TextComponent> = (args: TextComponent) => ({
  props: args
})

export const text = Template.bind({});
text.args = {
  text: 'A Title',
  color: 'black',
  size: 'regular'
}
