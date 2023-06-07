import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ITreeNode {
  label: string;
  value?: string;
  selected?: boolean;
  icon?: string;
  children?: Array<ITreeNode>;
}
@Component({
  selector: 'ui-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeViewComponent {

  @Input()
  data: Array<ITreeNode> = [];

  trackByValue(index: number, treeNode: ITreeNode): string {
    return treeNode.label;
  }
}
