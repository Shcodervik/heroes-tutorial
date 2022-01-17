import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { DashboardComponent } from './hero/dashboard/dashboard.component';
import { DetailComponent } from './hero/detail/detail.component';
import { AddComponent } from './hero/add/add.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'add', component: AddComponent },

];

@NgModule({
  imports: [
    RouterModule, //it was fix for undisplayed heroes
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
