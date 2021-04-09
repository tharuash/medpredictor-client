import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SeewhyComponent } from './components/seewhy/seewhy.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { RouteGuardService } from './services/guards/route.guard.service';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'seewhy/:medicine', component: SeewhyComponent, canActivate: [RouteGuardService]},
  {path: 'purchase/:details', component: PurchaseComponent, canActivate: [RouteGuardService]},
  {
    path: 'order',
    component: LayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
    }]
  },
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
