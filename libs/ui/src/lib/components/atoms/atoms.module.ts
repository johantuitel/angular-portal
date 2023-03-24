import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { LinkComponent } from './link/link.component';
import { NgModule } from '@angular/core';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [IconComponent, LinkComponent, ButtonComponent, TextComponent],
  imports: [CommonModule],
  exports: [IconComponent, LinkComponent, ButtonComponent, TextComponent],
})
export class AtomsModule {}
