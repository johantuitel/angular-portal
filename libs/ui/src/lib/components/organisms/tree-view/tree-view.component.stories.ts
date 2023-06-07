import { ITreeNode, TreeViewComponent } from './tree-view.component';
import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { OrganismsModule } from '../organisms.module';

export default {
  title: 'Organisms/TreeView',
  component: TreeViewComponent,
  decorators: [
    moduleMetadata({
      imports: [OrganismsModule]
    })
  ]
} as Meta<TreeViewComponent>;

const tree: Array<ITreeNode> = [
  {label: 'Value A'},
  {label: 'Value B', children: [{label: 'Value B.1'}, {label: 'Value B.2'}]},
  {label: 'Value C', selected: true, children: [{label: 'Value C.1', children: [{label: 'Value C.1.A'}, {label: 'Value C.1.B'}]}, {label: 'Value C.2'}]},
]
const Template: Story<TreeViewComponent> = (args: TreeViewComponent) => ({
  props: args
})

export const simpleTree = Template.bind({});
simpleTree.args = {
  data: tree
}
