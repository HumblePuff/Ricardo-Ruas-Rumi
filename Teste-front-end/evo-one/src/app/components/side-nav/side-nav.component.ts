import { Menu } from './../../core/models/menu.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export const appMenu: Menu = {
  items: [
    {
      title: 'Ocorrências',
      iconCssClass: 'occurences-icon',
      route: 'occurences',
    },
    {
      title: 'Usuários',
      iconCssClass: 'users-icon',
      route: 'users',
    },
    {
      title: 'Mapa',
      iconCssClass: 'map-icon',
      route: 'map',
    }
  ]
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})



export class SideNavComponent implements OnInit{
  menu!: Menu

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
      this.menu = appMenu
  }
}
