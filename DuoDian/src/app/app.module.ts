import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { PortadaComponent } from './screen/portada/portada/portada.component';
import { InicioComponent } from './screen/inicio/inicio/inicio.component';
import { MenuComponent } from './screen/menu/menu/menu.component';
import { LoginComponent } from './screen/login/login/login.component';
import { SignupComponent } from './screen/signup/signup/signup.component';
import { ConsultasComponent } from './screen/consultas/consultas/consultas.component';
import { ReclamosComponent } from './screen/reclamos/reclamos/reclamos.component';
import { SolicitudesComponent } from './screen/solicitudes/solicitudes/solicitudes.component';
import { ProductosrecomendadosComponent } from './screen/productosrecomendados/productosrecomendados/productosrecomendados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortadaComponent,
    InicioComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    ConsultasComponent,
    ReclamosComponent,
    SolicitudesComponent,
    ProductosrecomendadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
