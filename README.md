# RxjsSamples


### Routing Module -- app-routing.module.ts

#### Lazy Loading

```typescript
  const routes: Routes = [
    { path: 'samples', loadChildren: './pages/home/home-page-module.module#HomePageModuleModule' },
    { path: 'interceptors', loadChildren: './pages/repositories/repositories-module.module#RepositoriesModule' },
    { path: 'shortener', loadChildren: './pages/shortener/shortener.module#ShortenerModule' },
    { path: '', redirectTo: 'samples', pathMatch: 'full' },
    { path: '**', redirectTo: '/samples', pathMatch: 'full' }
  ];
```

#### Preload Modules

```typescript
@NgModule({
  imports: [
    RouterModule
    .forRoot(routes,
    { useHash: true,
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
```
