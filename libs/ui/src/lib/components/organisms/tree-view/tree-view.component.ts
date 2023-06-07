import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

export interface ITreeNode {
  label: string;
  value?: string;
  type: 'object' | 'node'
  selected?: boolean;
  icon?: string;
  children?: Array<ITreeNode>;
}
@Component({
  selector: 'ui-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TreeViewComponent {

  @Input()
  data: Array<ITreeNode> = [];

  trackByValue(index: number, treeNode: ITreeNode): string {
    return treeNode.label;
  }
}
