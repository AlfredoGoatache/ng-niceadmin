import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WrapperComponent } from './shared/wrapper/wrapper.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { PagesComponent } from './pages/pages/pages.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    WrapperComponent,
    DashboardComponent,
    ChartsComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
