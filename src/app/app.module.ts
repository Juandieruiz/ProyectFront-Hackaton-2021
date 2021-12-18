import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { FormularioRegisterComponent } from './components/formulario-register/formulario-register.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CuerpoIndexComponent } from './components/cuerpo-index/cuerpo-index.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CuerpoHomeComponent } from './components/cuerpo-home/cuerpo-home.component';
import { TarjetaUsuarioComponent } from './components/tarjeta-usuario/tarjeta-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    IndexPageComponent,
    NavbarComponent,
    FormularioLoginComponent,
    FormularioRegisterComponent,
    HeaderComponent,
    FooterComponent,
    CuerpoIndexComponent,
    CuerpoHomeComponent,
    TarjetaUsuarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
