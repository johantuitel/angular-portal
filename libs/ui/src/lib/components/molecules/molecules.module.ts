import { AtomsModule } from './../atoms/atoms.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [BreadcrumbsComponent, NavigationComponent],
  imports: [CommonModule, AtomsModule],
  exports: [BreadcrumbsComponent, NavigationComponent],
})
export class MoleculesModule {}
