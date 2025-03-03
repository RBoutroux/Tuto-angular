import { Routes } from '@angular/router';

import { AuthenticateComponent } from './authenticate/authenticate.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: AuthenticateComponent}
];
