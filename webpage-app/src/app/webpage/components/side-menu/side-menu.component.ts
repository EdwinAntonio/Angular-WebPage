import { Component } from '@angular/core';
import { SideMenuOptionsComponent } from "./side-menu-options/side-menu-options";
import { SideMenuProfileComponent } from "./side-menu-profile/side-menu-profile";

@Component({
  selector: 'webpage-side-menu',
  templateUrl: './side-menu.component.html',
  imports: [
    SideMenuProfileComponent,
    SideMenuOptionsComponent 
],
})
export class SideMenuComponent { }
