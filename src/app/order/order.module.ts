import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from './components/history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteGuardService } from '../services/guards/route.guard.service';


@NgModule({
  declarations: [DashboardComponent, HistoryComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RouteGuardService]
})
export class OrderModule { }
