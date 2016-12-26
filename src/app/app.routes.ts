import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import { HomeComponent }               from './home/home.component';

const appRoutes: Routes = [

  { path: 'application', loadChildren: './+lazy/lazy.module#LazyModule' },
  { path: 'overview/application', component: HomeComponent },
  { path: '**', redirectTo: 'overview/application' }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{enableTracing:true,useHash :true});
