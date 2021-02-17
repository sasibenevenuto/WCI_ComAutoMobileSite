import { BrowserModule } from '@angular/platform-browser';
import { Injector, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptorService } from './shared/services/authenticationInterceptor.service';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { StateComponent } from './pages/common/state/state.component';
import { StateService } from './services/common/state.services';
import { LoginComponent } from './pages/home/login/login.component';
import { ResetSenhaComponent } from './pages/home/reset-senha/reset-senha.component';
import { NovoUsuarioComponent } from './pages/home/novo-usuario/novo-usuario.component';
import { ResetSenhaModalComponent } from './pages/home/reset-senha-modal/reset-senha-modal.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CitiesComponent } from './pages/common/cities/cities.component';
import { CityService } from './services/common/city.services';
import { UserService } from './services/identity/user.services';

registerLocaleData(localePt);

export function authInterceptorFactory(router: Router, injector: Injector) {
  return new AuthenticationInterceptorService(router, injector);
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StateComponent,
    LoginComponent,
    ResetSenhaComponent,
    NovoUsuarioComponent,
    ResetSenhaModalComponent,
    CitiesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: authInterceptorFactory,
      multi: true,
      deps: [Router, Injector]
    },
    StateService,
    CityService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
