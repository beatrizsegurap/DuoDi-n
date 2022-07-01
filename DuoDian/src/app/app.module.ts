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
import { ConsultasRegistradoComponent } from './screen/consultas-registrado/consultas-registrado.component';
import { RealizarConsultaComponent } from './screen/realizar-consulta/realizar-consulta.component';
import { RealizarReclamoComponent } from './screen/realizar-reclamo/realizar-reclamo.component';
import { NodisponibleInvitadoComponent } from './screen/nodisponible-invitado/nodisponible-invitado.component';
import { IniciarsesionRegistradoComponent } from './screen/iniciarsesion-registrado/iniciarsesion-registrado.component';
import { RegistrarInvitadoComponent } from './screen/registrar-invitado/registrar-invitado.component';
import { MenuRegistradoComponent } from './screen/menu-registrado/menu-registrado.component';
import { PerfilInvitadoComponent } from './screen/perfil-invitado/perfil-invitado.component';

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
    ProductosrecomendadosComponent,
    ConsultasRegistradoComponent,
    RealizarConsultaComponent,
    RealizarReclamoComponent,
    NodisponibleInvitadoComponent,
    IniciarsesionRegistradoComponent,
    RegistrarInvitadoComponent,
    MenuRegistradoComponent,
    PerfilInvitadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
