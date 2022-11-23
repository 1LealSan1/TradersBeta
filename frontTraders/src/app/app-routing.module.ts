import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexUserComponent } from './index-user/index-user.component';
import { LoginTraderComponent } from './login-trader/login-trader.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegistrarTraderComponent } from './registrar-trader/registrar-trader.component';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';

const routes: Routes = [
  { path: "User/registrarUser", component:  RegistrarUserComponent},
  { path: "Trader/registrarTrader", component: RegistrarTraderComponent},
  { path: "User/loginUser", component: LoginUserComponent},
  { path: "Trader/loginTrader", component: LoginTraderComponent},
  { path: "User/inicio", component: IndexUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
