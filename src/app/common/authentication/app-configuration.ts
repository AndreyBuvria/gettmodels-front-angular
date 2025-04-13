import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfiguration>('App configuration');

export interface AppConfiguration {
  apiUrl: string;
}
