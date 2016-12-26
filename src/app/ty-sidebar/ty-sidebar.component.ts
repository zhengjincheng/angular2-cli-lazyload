import { Component, OnInit } from '@angular/core';
import { MenuService ,Menu} from '../menu.service';
import { Router ,NavigationEnd} from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'app-ty-sidebar',
  templateUrl: './ty-sidebar.component.html',
  styleUrls: ['./ty-sidebar.component.css']
})
export class TySidebarComponent implements OnInit {
  menus: Menu[];

  constructor(private location: Location,private router: Router,private menuService: MenuService) {
	  this.router.events.subscribe((evt) => {
	if (evt instanceof NavigationEnd){
			this.get2LevelMenus();
	}
	});
  }

  ngOnInit() {
	  this.get2LevelMenus();
  }
  get2LevelMenus(): void {
    this.menuService.get2LevelMenus().then(menus =>{ 
		console.log(menus);
	this.menus = menus});
  }
}
