import { AtomsModule } from './../atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AtomsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class OrganismsModule {}
