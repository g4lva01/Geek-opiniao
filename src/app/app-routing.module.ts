import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { AnimesComponent } from './pages/animes/animes.component';
import { ManhwasComponent } from './pages/manhwas/manhwas.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  },
  {
    path:'animes',
    component :AnimesComponent
  },
  {
    path:'manhwas',
    component :ManhwasComponent
  },
  {
    path:'animes/content/:id',
    component:ContentComponent
  },
  {
    path:'manhwas/content/:id',
    component:ContentComponent
  },
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }