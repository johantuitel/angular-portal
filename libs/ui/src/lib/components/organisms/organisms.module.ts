import { AtomsModule } from './../atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { TreeViewComponent } from './tree-view/tree-view.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TreeViewComponent],
  imports: [CommonModule, AtomsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class OrganismsModule {}
