import { Injectable } from '@angular/core';
import {Location } from '@angular/common';
import { Router } from '@angular/router';

export class Menu {
  label: number;
  icon: string;
  uri:string;
  active:boolean;
  children:Menu[];
}
@Injectable()

export class MenuService {
 menus = [{ label: '概览',icon:'tyc-mainmenu-a tyc-mainmenu-overview', uri:'overview/application', active:false,children :[{uri: 'overview/application',label: '应用一览',icon:'tyc-sidebar-icon tyc-sidebar-icon-overview', active:false},{uri: 'overview/keyaction',label: '关键应用一览',icon:'tyc-sidebar-icon tyc-sidebar-icon-key-overview', active:false}]},
		{ label: '应用',icon:'tyc-mainmenu-a tyc-mainmenu-use',uri:'application/overview', active:false,children :[{uri: 'application/overview',label: '情报汇总',icon:'tyc-sidebar-icon tyc-sidebar-icon-summary', active:false},{uri: 'application/view',label: '应用拓扑',icon:'tyc-sidebar-icon tyc-sidebar-icon-topology', active:false}]},
		{ label: '关键应用过程' ,icon:'tyc-mainmenu-a tyc-mainmenu-key-use',uri:'', active:false,children:[]},
		{ label: '设置',icon:'tyc-mainmenu-a tyc-mainmenu-setting',uri:'', active:false,children:[]}];
		
  constructor(private location: Location,private router: Router) { }

  getMenus(): Promise<Menu[]> {
	// console.log(this.router);
	 console.log(`MenuService Location=   ${this.location.path(false)}`);
	 for (let item of this.menus){
			item.active=false;
			for (let m of item.children) {
				if (this.isActive(m)){
					item.active=true;
					break;
				}
			}
		}
	return Promise.resolve(this.menus);
  }
  get2LevelMenus(): Promise<Menu[]> {
	 var menu=[];
	 for (let item of this.menus){
			if (this.isActive(item)){
				menu=item.children;
				break;
			}
	  }
	  for (let item of menu){
		 if ( this.isActive(item)){
			 item.active=true;
		 }else{
			 item.active=false;
		 }
	  }
	return Promise.resolve(menu);
  }
  isActive(menu):boolean{		
	return this.location.path(false)===`/${menu.uri}`;
  }
	
  
}
