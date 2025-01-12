import { Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { TutorialComponent } from './users/tutorial/tutorial.component';
import { SiqnupComponent } from './users/siqnup/siqnup.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'siqnup', component: SiqnupComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
