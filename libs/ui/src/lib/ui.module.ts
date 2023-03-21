import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  exports: [ComponentsModule],
})
export class UiModule {
}
