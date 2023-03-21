import { Meta, Story } from '@storybook/angular';

import { BreadcrumbsComponent } from './breadcrumbs.component';

export default {
  title: 'Molecules/Breadcrumbs',
  component: BreadcrumbsComponent,
} as Meta<BreadcrumbsComponent>;

const Template: Story<BreadcrumbsComponent> = (args: BreadcrumbsComponent) => ({
  props: args
})

export const breadcrumbs = Template.bind({});
breadcrumbs.args = {
  color: 'blush',
  breadcrumbs: [
    {
      label: 'Home',
      url: '/home',
    },
    {
      label: 'Page 1',
      url: '/home/page-1',
    },
    {
      label: 'Current page',
      url: '/home/page-1/current-page',
    },
  ]
}
