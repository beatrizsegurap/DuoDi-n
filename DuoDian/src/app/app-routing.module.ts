import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './screen/portada/portada/portada.component';
import { InicioComponent } from './screen/inicio/inicio/inicio.component';
import { SignupComponent } from './screen/signup/signup/signup.component';
import { LoginComponent } from './screen/login/login/login.component';
import { MenuComponent } from './screen/menu/menu/menu.component';
import { SolicitudesComponent } from './screen/solicitudes/solicitudes/solicitudes.component';
import { ConsultasComponent } from './screen/consultas/consultas/consultas.component';
import { ReclamosComponent } from './screen/reclamos/reclamos/reclamos.component';
import { ProductosrecomendadosComponent } from './screen/productosrecomendados/productosrecomendados/productosrecomendados.component';
import { RealizarConsultaComponent } from './screen/realizar-consulta/realizar-consulta.component';
import { RealizarReclamoComponent } from './screen/realizar-reclamo/realizar-reclamo.component';
import { NodisponibleInvitadoComponent } from './screen/nodisponible-invitado/nodisponible-invitado.component';
import { RegistrarInvitadoComponent } from './screen/registrar-invitado/registrar-invitado.component';
import { IniciarsesionRegistradoComponent } from './screen/iniciarsesion-registrado/iniciarsesion-registrado.component';
import { MenuRegistradoComponent } from './screen/menu-registrado/menu-registrado.component';
import { ConsultasRegistradoComponent } from './screen/consultas-registrado/consultas-registrado.component';
import { PerfilInvitadoComponent } from './screen/perfil-invitado/perfil-invitado.component';


const routes: Routes = [
  {path: '', redirectTo: '/portada', pathMatch: 'full'},
  {path: 'portada', component:PortadaComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'solicitudes', component:SolicitudesComponent},
  {path: 'consultas', component:ConsultasComponent},
  {path: 'reclamos', component:ReclamosComponent},
  {path: 'productosrecomendados', component:ProductosrecomendadosComponent},
  {path: 'realizarConsulta', component:RealizarConsultaComponent},
  {path: 'realizarReclamo', component:RealizarReclamoComponent},
  {path: 'alert',component:NodisponibleInvitadoComponent},
  {path: 'registrarInvitado',component:RegistrarInvitadoComponent},
  {path: 'iniciarsesionInvitado',component:IniciarsesionRegistradoComponent},
  {path: 'menuRegistrado', component:MenuRegistradoComponent},
  {path: 'consultasRegistrado',component:ConsultasRegistradoComponent},
  {path: 'perfilInivitado',component:PerfilInvitadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
