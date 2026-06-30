import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authInterceptor } from './core/interceptors/auth';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './core/interceptors/logging';
import { loadingInterceptor } from './core/interceptors/loading';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    provideHttpClient(
      withInterceptors([authInterceptor, loggingInterceptor, loadingInterceptor])
    )
    
  ]
  
};
