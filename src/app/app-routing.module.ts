import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './pages/general/state/state.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { LoginComponent } from './pages/home/login/login.component';
import { NovoUsuarioComponent } from './pages/home/novo-usuario/novo-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'novo-usuario', component: NovoUsuarioComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'state', component: StateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
