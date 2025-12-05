// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { JustificationComponent } from './components/justification/justification';
import { InstallationComponent } from './components/installation/installation';
import { FirstStepsComponent } from './components/first-steps/first-steps';
import { UsageComponent } from './components/usage/usage';
import { FunctioningComponent } from './components/functioning/functioning';
import { ConclusionsComponent } from './components/conclusions/conclusions';
import { ResourcesComponent } from './components/resources/resources';

export const routes: Routes = [
  { path: '', redirectTo: '/justification', pathMatch: 'full' },
  { path: 'justification', component: JustificationComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'first-steps', component: FirstStepsComponent },
  { path: 'usage', component: UsageComponent },
  { path: 'functioning', component: FunctioningComponent },
  { path: 'conclusions', component: ConclusionsComponent },
  { path: 'resources', component: ResourcesComponent },
];
