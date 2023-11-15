import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatahubComponent } from '../datahub.component';
import { DatahubGuard } from '../guard/datahub.guard';
import { RankingComponent } from '../components/ranking/ranking.component';
import { PlayersComponent } from '../components/players/players.component';
import { RankingListPlayersPostComponent } from '../components/ranking/components/ranking-list-players-post/ranking-list-players-post.component';
import { RankingProfilePlayerComponent } from '../components/ranking/components/ranking-profile-player/ranking-profile-player.component';
import { RankingPlayersComponent } from '../components/ranking/components/ranking-players/ranking-players.component';
import { ProfilComponent } from '../components/players/components/profil/profil.component';
import { SimilarComponent } from '../components/players/components/similar/similar.component';
import { ComparisonComponent } from '../components/players/components/comparison/comparison.component';
import { RankingPlayerPerformanceComponent } from '../components/ranking/components/ranking-player-performance/ranking-player-performance.component';
import { RankingPlayerMedicaleComponent } from '../components/ranking/components/ranking-player-medicale/ranking-player-medicale.component';
import { RankingPlayerIndividuelleComponent } from '../components/ranking/components/ranking-player-individuelle/ranking-player-individuelle.component';
import { RankingPlayerResumeComponent } from '../components/ranking/components/ranking-player-resume/ranking-player-resume.component';


const routes: Routes = [
  {
    path: '', component: DatahubComponent, canActivate: [DatahubGuard], children: [
      {
        path: 'ranking', component: RankingComponent, children: [
          { path: '', component: RankingPlayersComponent },
          { path: 'players-post', component: RankingPlayersComponent },
          { path: 'list-players-post/:id', component: RankingListPlayersPostComponent },
          { path: 'profile-player/:id/:player_id', component: RankingProfilePlayerComponent , children : [
            { path: 'player-resume', component: RankingPlayerResumeComponent },
            { path: 'player-performance', component: RankingPlayerPerformanceComponent },
            { path: 'player-medicale', component: RankingPlayerMedicaleComponent },
            { path: 'player-individuelle', component: RankingPlayerIndividuelleComponent },
          ] },
        ]
      },
      {
        path: 'players', component: PlayersComponent, children: [
          { path: '', component: ProfilComponent },
          {
            path: "profil",
            component: ProfilComponent,
          },
          {
            path: "similar",
            component: SimilarComponent,
          },
          {
            path: "comparison",
            component: ComparisonComponent,
          },
        ],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatahubRoutingModule { }
