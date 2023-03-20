import { CommonModule } from '@angular/common';
import { IconsRegistryService } from './icons.registry.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule]
})
export class IconsModule {
  constructor(private readonly iconsRegistry: IconsRegistryService) {
  }
}
