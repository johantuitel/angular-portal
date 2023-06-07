import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ITreeNode {
  label: string;
  value?: string;
  selected?: boolean;
  icon?: string;
  children?: Array<ITreeNode>;
}
@Component({
  selector: 'ui-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeNodeComponent {

  @Input()
  data: Array<ITreeNode> = [];

  trackByValue(index: number, treeNode: ITreeNode): string {
    return treeNode.label;
  }
}
