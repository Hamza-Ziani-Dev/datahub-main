import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionsComponent } from '../competitions.component';
import { ClassementComponent } from '../components/classement/classement.component';
import { ResultatsComponent } from '../components/resultats/resultats.component';
import { MatchesComponent } from '../components/matches/matches.component';


const routes: Routes = [
  {
    path: "",component: CompetitionsComponent, children: [
      { path: "", component: ClassementComponent },
      {
        path: "classement",
        component: ClassementComponent,
      },
      {
        path: "resultats",
        component: ResultatsComponent,
      },
      {
        path: "matches",
        component: MatchesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionsRoutingModule { }
