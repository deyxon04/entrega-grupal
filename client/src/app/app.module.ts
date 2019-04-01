import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteresadoComponent } from './interesado/interesado.component';
import { AspiranteComponent } from './aspirante/aspirante.component';
import { CoordinadorComponent } from './coordinador/coordinador.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main.component';
import {FormsModule} from '@angular/forms'
  import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InteresadoComponent,
    AspiranteComponent,
    CoordinadorComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
