import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'beer-page',
    loadComponent: () => import('./beer-page/beer-page.page').then( m => m.BeerPagePage)
  },
  {
    path: 'favorite-beer',
    loadComponent: () => import('./favorite-beer/favorite-beer.page').then( m => m.FavoriteBeerPage)
  },
];
