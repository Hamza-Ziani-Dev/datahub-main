import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './components/auth/login/login.module#LoginModule' },
  // { path: '', loadChildren: './components/presentation/dashboard.module#DashboardModule', pathMatch: 'full' },
  // { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
  // Add more routes as needed
 //  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Wildcard route to redirect to the default route if no matching route is found
  { path: 'datahub', loadChildren: './components/datahub/datahub.module#DatahubModule' },
  { path: 'competitions', loadChildren: './components/competitions/competitions.module#CompetitionsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
