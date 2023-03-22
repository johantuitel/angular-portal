import { AtomsModule } from './../atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AtomsModule],
  exports: [HeaderComponent],
})
export class OrganismsModule {}
