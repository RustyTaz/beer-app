import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
   {
    path: '',
    redirectTo: '/tab-home',
    pathMatch: 'full',
  },
  {
    path: 'tab-home',
    loadComponent: () =>
      import('../tab-home/tab-home.page').then((m) => m.TabHomePage),
  },
  {
    path: 'beer-page/:id',
    loadComponent: () => import('../beer-page/beer-page.page').then((m) => m.BeerPagePage),
  }
];
