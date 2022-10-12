import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './componentes/experiencias/new-experiencia.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'app-header', component: HeaderComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
