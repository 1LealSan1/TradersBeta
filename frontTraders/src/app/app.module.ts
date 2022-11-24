import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//biblioteca de angular material
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

//componentes hijos
import {LoginUserComponent } from './login-user/login-user.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginTraderComponent } from './login-trader/login-trader.component';
import { RegistrarTraderComponent } from './registrar-trader/registrar-trader.component';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { IndexUserComponent } from './index-user/index-user.component';
import { IndexTraderComponent } from './index-trader/index-trader.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { CrearPeticionComponent } from './crear-peticion/crear-peticion.component';
import { PeticionesDisponblesComponent } from './peticiones-disponbles/peticiones-disponbles.component';
import {MatListModule} from '@angular/material/list';
import { ListaPeticionesComponent } from './lista-peticiones/lista-peticiones.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    LoginTraderComponent,
    RegistrarTraderComponent,
    RegistrarUserComponent,
    IndexUserComponent,
    IndexTraderComponent,
    CrearPeticionComponent,
    PeticionesDisponblesComponent,
    ListaPeticionesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //angular material
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
