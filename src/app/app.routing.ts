import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
]

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes,
  {
    preloadingStrategy: PreloadAllModules,
    enableTracing: true
  })
