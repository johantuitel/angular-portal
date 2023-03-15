import {Injectable} from '@angular/core';
import {Icon} from './icon';


@Injectable({providedIn: 'root'})
export class IconsRegistryService {

  private readonly registry: Map<string, string> = new Map();

  registerIcons(icons: Array<Icon>): void {
    icons.forEach(icon => this.registry.set(icon.name, icon.data));
  }

  getIcon(name: string): string | undefined {
    if (!this.registry.has(name)) {
      console.warn(`Icon ${name} was not found in the Icon Registry`);
    }

    return this.registry.get(name);
  }
}
