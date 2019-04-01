import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InteresadoComponent } from './interesado/interesado.component';
import { CoordinadorComponent } from './coordinador/coordinador.component';
import { MainComponent } from './main.component';
import { AspiranteComponent } from './aspirante/aspirante.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: MainComponent,canActivate: [] },
  { path: 'interesado', component: InteresadoComponent,canActivate: [] },
  { path: 'coordinador', component: CoordinadorComponent },
  { path: 'aspirante', component: AspiranteComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
