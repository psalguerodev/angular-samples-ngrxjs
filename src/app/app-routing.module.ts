import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';
import { ShortenerComponent } from './pages/shortener/shortener.component';

const routes: Routes = [
  { path: '', redirectTo: '/samples', pathMatch: 'full' },
  { path: 'samples', component: HomeComponent },
  { path: 'interceptors', component: RepositoriesComponent },
  { path: 'shortener', component: ShortenerComponent },
  { path: '**', redirectTo: '/samples', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
