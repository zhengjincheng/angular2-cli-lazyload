import { Component, OnInit } from '@angular/core';
import { MenuService ,Menu} from '../menu.service';
import { Router,NavigationEnd } from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'app-ty-header',
  templateUrl: './ty-header.component.html',
  styleUrls: ['./ty-header.component.css'],
  providers: [MenuService]
})
export class TyHeaderComponent implements OnInit {
  menus: Menu[];
  current_url='';
  constructor(private location: Location,private router: Router,private menuService: MenuService) {
	this.router.events.subscribe((evt) => {
	this.current_url = evt.url ;
	if (evt instanceof NavigationEnd){
			this.getMenus();
	}
	});
  }

  ngOnInit() {
	  this.getMenus();
  }
  getMenus(): void {
    this.menuService.getMenus().then(menus =>{ 
	this.menus = menus
	console.log(menus);
	});
  }
  
  onMenuitemClick():void{
	this.router.navigateByUrl('lazy/lazypage');
  }
}
