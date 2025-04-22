import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'side-menu-profile',
  templateUrl: './side-menu-profile.html',
  imports: [

  ]
})

export class SideMenuProfileComponent {
  envs = environment;
}
