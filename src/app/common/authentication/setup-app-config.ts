import { StaticProvider } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { APP_CONFIG, AppConfiguration } from './app-configuration';
import { firstValueFrom } from 'rxjs';

export function setupAppConfig(loader: () => Promise<AppConfiguration>): Promise<StaticProvider[]> {
  return loader()
    .catch(() => ({}))
    .then((config) => [
      {
        provide: APP_CONFIG,
        useValue: config
      }
    ]);
}

export function fetchFrom(path: string): () => Promise<AppConfiguration> {
  return () => firstValueFrom(ajax.getJSON<AppConfiguration>(path));
}
