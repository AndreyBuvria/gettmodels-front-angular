import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { getConfig } from '@app/app.config.server';

const bootstrap = async () => {
  const config = await getConfig();

  return bootstrapApplication(AppComponent, config)
};

export default bootstrap;
