import { Routes } from '@angular/router';
import { Todo } from './pages/todo/todo';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
    path: '',
    component: Dashboard
  },
  {
    path: '**',
    redirectTo: ''
  }
];
