import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { LinkComponent } from './link/link.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [IconComponent, LinkComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [IconComponent, LinkComponent, ButtonComponent],
})
export class AtomsModule {}
