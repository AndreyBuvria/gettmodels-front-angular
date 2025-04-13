import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { fetchFrom, setupAppConfig } from '@app/common/authentication/setup-app-config';

setupAppConfig(fetchFrom('/config/env.config.json'))
  .then((config) => bootstrapApplication(AppComponent, appConfig(config)))
  .catch((err) => console.error(err));
