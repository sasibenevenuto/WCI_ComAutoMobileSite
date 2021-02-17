import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './pages/common/cities/cities.component';
import { StateComponent } from './pages/common/state/state.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { LoginComponent } from './pages/home/login/login.component';
import { NovoUsuarioComponent } from './pages/home/novo-usuario/novo-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'novo-usuario', component: NovoUsuarioComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'state', component: StateComponent },
  { path: 'City', component: CitiesComponent }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
