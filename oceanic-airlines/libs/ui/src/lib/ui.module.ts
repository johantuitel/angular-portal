import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { IconsModule } from './assets/src/libs/icons/icons.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, IconsModule, ComponentsModule],
  exports: [IconsModule, ComponentsModule],
})
export class UiModule {
  constructor() {
    console.log('>>>>> create ui module');
  }
}
