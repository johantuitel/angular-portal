import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IconsRegistryService} from './icons.registry.service';
import {brandIcons} from './brand.icons';
import {regularIcons} from './regular.icons';
import {solidIcons} from './solid.icons';
import {sportIcons} from './sport.icons';
import {roleIcons} from './role.icons';

@NgModule({
  imports: [CommonModule]
})
export class IconsModule {
  constructor(private readonly iconsRegistry: IconsRegistryService) {
    this.iconsRegistry.registerIcons([...brandIcons, ...regularIcons, ...solidIcons, ...sportIcons, ...roleIcons]);
  }
}
