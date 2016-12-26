import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing, appRoutingProviders } from './app.routes';
import { TyHeaderComponent } from './ty-header/ty-header.component';
import { TySidebarComponent } from './ty-sidebar/ty-sidebar.component';
import { TyFooterComponent } from './ty-footer/ty-footer.component';

import { MenuService } from './menu.service';
import { TyProgressbarComponent } from './ty-progressbar/ty-progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TyHeaderComponent,
    TySidebarComponent,
    TyFooterComponent,
    TyProgressbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders,MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
