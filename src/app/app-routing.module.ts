import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  
  { path: 'home', component: AccueilComponent },
  { path: 'user-management', component: UsersComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

