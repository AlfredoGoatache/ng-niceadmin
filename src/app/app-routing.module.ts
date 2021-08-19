import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './pages/charts/charts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages/pages.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { WrapperComponent } from './shared/wrapper/wrapper.component';

const routes: Routes = [
  {path: '', component: WrapperComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'widgets', component: WidgetsComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'pageblan', component: PagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
