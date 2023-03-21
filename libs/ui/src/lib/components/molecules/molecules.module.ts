import { AtomsModule } from './../atoms/atoms.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, AtomsModule],
  exports: [BreadcrumbsComponent],
})
export class MoleculesModule {}
