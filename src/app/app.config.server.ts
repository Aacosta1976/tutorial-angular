import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';  // asegúrate de que './app.config' existe y exporta appConfig

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),  // habilita el rendering del lado del servidor
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
