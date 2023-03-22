import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { AtomsModule } from '../../atoms/atoms.module';
import { FooterComponent } from './footer.component';

export default {
  title: 'Organisms/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
        imports: [
            AtomsModule,
        ],
    }),
],
} as Meta<FooterComponent>;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args
})

export const footer = Template.bind({});
