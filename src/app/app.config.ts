import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SnakeContainingComponentComponent } from './snake-containing-component/snake-containing-component.component';
import routeConfig from './routes';
import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideHttpClient()],
};
