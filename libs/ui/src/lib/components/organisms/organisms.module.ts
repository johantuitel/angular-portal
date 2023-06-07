import { AtomsModule } from './../atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { TreeNodeComponent } from './tree-view/tree-node.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TreeViewComponent, TreeNodeComponent],
  imports: [CommonModule, AtomsModule],
  exports: [HeaderComponent, FooterComponent, TreeViewComponent, TreeNodeComponent],
})
export class OrganismsModule {}
