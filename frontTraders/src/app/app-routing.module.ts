import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPeticionComponent } from './crear-peticion/crear-peticion.component';
import { IndexTraderComponent } from './index-trader/index-trader.component';
import { IndexUserComponent } from './index-user/index-user.component';
import { ListaPeticionesComponent } from './lista-peticiones/lista-peticiones.component';
import { LoginTraderComponent } from './login-trader/login-trader.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegistrarTraderComponent } from './registrar-trader/registrar-trader.component';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { AuthGuard } from '../app/auth.guard';
import { AuthTraderGuard } from './auth-trader.guard';

const routes: Routes = [
  { path: "User/registrarUser", component:  RegistrarUserComponent},
  { path: "Trader/registrarTrader", component: RegistrarTraderComponent},
  { path: "User/loginUser", component: LoginUserComponent},
  { path: "Trader/loginTrader", component: LoginTraderComponent},
  { path: "User/inicio", component: IndexUserComponent, canActivate:[AuthGuard]},
  { path: "Trader/inicio", component: IndexTraderComponent, canActivate:[AuthTraderGuard]},
  { path: "User/crearPeticion", component: CrearPeticionComponent},
  { path: "Trader/verPeticiones", component: ListaPeticionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
