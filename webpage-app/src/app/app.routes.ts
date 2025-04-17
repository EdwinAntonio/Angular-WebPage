import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    // component: DashboardPageComponent  <---- Esta es otra manera más sencilla de importar un componente pero un poco más pesado en recursos
    // el LoadComponent funciona igual solmanete que es un poco más rapido
    loadComponent: () =>
      import('./webpage/pages/dashborad-page/dashboard-page.component')
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
