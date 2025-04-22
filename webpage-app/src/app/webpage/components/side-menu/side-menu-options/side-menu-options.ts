import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../../../environments/environment.development';

interface MenuOption{
  label: string,
  subLabel: string,
  route: string,
  icon: string
}

@Component({
  selector: 'side-menu-options',
  templateUrl: './side-menu-options.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})

export class SideMenuOptionsComponent  {

  menuOptions:MenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line'
    },
    {
      label: 'Buscador',
      subLabel: 'Busquedas de Gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass'
    }
  ]
}
