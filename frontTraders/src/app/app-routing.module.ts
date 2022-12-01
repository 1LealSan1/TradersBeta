import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPeticionComponent } from './crear-peticion/crear-peticion.component';
import { ListaPeticionesComponent } from './lista-peticiones/lista-peticiones.component';
import { LoginTraderComponent } from './login-trader/login-trader.component';
import { RegistrarTraderComponent } from './registrar-trader/registrar-trader.component';
import { AuthTraderGuard } from './auth-trader.guard';
import { IndexUserComponent } from './index-user/index-user.component';

const routes: Routes = [
  { path: "User/registrar", component: RegistrarTraderComponent},
  { path: "User/login", component: LoginTraderComponent},
  { path: "User/inicio", component: IndexUserComponent, canActivate:[AuthTraderGuard]},
  { path: "User/crearPeticion", component: CrearPeticionComponent},
  { path: "User/verPeticiones", component: ListaPeticionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
