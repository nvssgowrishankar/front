import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from 'src/app/environments/environment';
import { enableProdMode } from '@angular/core';


if (environment.production) {
  // Perform production-specific tasks
  enableProdMode();
}

// Bootstrap the Angular application
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
