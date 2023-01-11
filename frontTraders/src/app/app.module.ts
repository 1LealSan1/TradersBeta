import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//biblioteca de angular material
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//importacion de interceptors services
import { TokenInterceptorService } from "../app/services/token-interceptor.service";

//componentes hijos
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginTraderComponent } from './login-trader/login-trader.component';
import { RegistrarTraderComponent } from './registrar-trader/registrar-trader.component';
import { IndexUserComponent } from './index-user/index-user.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { CrearPeticionComponent } from './crear-peticion/crear-peticion.component';
import {MatListModule} from '@angular/material/list';
import { ListaPeticionesComponent } from './lista-peticiones/lista-peticiones.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthTraderGuard } from './auth-trader.guard';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    LoginTraderComponent,
    RegistrarTraderComponent,
    IndexUserComponent,
    CrearPeticionComponent,
    ListaPeticionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
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
    MatSortModule,
    MatTabsModule,
    FormsModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  providers: [
    AuthTraderGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
