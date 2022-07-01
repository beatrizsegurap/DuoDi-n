import { NgModule } from '@angular/core';
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
  {path: 'productosrecomendados', component:ProductosrecomendadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
