import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    // component: DashboardPageComponent  <---- Esta es otra manera más sencilla de importar un componente pero un poco más pesado en recursos
    // el LoadComponent funciona igual solmanete que es un poco más rapido
    loadComponent: () =>
      import('./webpage/pages/dashborad-page/dashboard-page.component'),
    children: [  //La importacion de un modulo children da a entender que la ruta padre (Dashboard) contendra los componentes que nosotros le asignemos dentro y serán hijas
      {
        path: 'trending',
        loadComponent: () =>
          import('./webpage/pages/trending-page/trending-page.component')
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./webpage/pages/search-page/search-page.component')
      },
      {
        path: '**', //El asignar una ruta ** damos a entender que se va a redirecciónar a la ruta padre asignada
        redirectTo: 'trending'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
