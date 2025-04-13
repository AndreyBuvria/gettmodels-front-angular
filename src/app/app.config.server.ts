import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { fetchFrom, setupAppConfig } from './common/authentication/setup-app-config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes)
  ]
};

export async function getConfig(): Promise<ApplicationConfig> {
  const config = await setupAppConfig(fetchFrom('/config/env.config.json'));

  return mergeApplicationConfig(appConfig(config), serverConfig)
}
