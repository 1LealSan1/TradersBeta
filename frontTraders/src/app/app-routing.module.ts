import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTraderComponent } from './login-trader/login-trader.component';
import { LoginUserComponent } from './login-user/login-user.component';

const routes: Routes = [
  { path: "User/registrarUser", component:  LoginUserComponent},
  { path: "Trader/registrarTrader", component: LoginTraderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
