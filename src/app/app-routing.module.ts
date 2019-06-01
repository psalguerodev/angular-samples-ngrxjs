import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'samples', loadChildren: './pages/home/home-page-module.module#HomePageModuleModule' },
  { path: 'interceptors', loadChildren: './pages/repositories/repositories-module.module#RepositoriesModule' },
  { path: 'shortener', loadChildren: './pages/shortener/shortener.module#ShortenerModule' },
  { path: '', redirectTo: 'samples', pathMatch: 'full' },
  { path: '**', redirectTo: '/samples', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
