import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from './components/history/history.component';
import { RouteGuardService } from '../services/guards/route.guard.service';


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [RouteGuardService]},
  {path: 'history', component: HistoryComponent, canActivate: [RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
