import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DatahubComponent } from "../datahub.component";
import { DatahubGuard } from "../guard/datahub.guard";
import { PlayersComponent } from "../components/players/players.component";
import { SimilarComponent } from "../components/players/components/similar/similar.component";
import { ComparisonComponent } from "../components/players/components/comparison/comparison.component";
import { TeamsComponent } from "../components/teams/teams.component";
import { OverviewComponent } from "../components/teams/components/overview/overview.component";
import { EquipeComponent } from "../components/teams/components/equipe/equipe.component";
import { JoueursComponent } from "../components/teams/components/joueurs/joueurs.component";
import { ProchainAdversaireComponent } from "../components/teams/components/prochain-adversaire/prochain-adversaire.component";
import { DatabasePlayerPerformanceComponent } from "../components/database/components/database-player-performance/database-player-performance.component";
import { DatabasePlayerMedicaleComponent } from "../components/database/components/database-player-medicale/database-player-medicale.component";
import { DatabasePlayerIndividuelleComponent } from "../components/database/components/database-player-individuelle/database-player-individuelle.component";
import { DatabasePlayerResumeComponent } from "../components/database/components/database-player-resume/database-player-resume.component";
import { RankingComponent } from "../components/ranking/ranking.component";
import { RankingListPlayersPostComponent } from "../components/ranking/components/ranking-list-players-post/ranking-list-players-post.component";
import { RankingProfilePlayerComponent } from "../components/ranking/components/ranking-profile-player/ranking-profile-player.component";
import { RankingPlayersComponent } from "../components/ranking/components/ranking-players/ranking-players.component";
import { DatabaseComponent } from "../components/database/database.component";
import { DatabaseListPlayersPostComponent } from "../components/database/components/database-list-players-post/database-list-players-post.component";
import { DatabaseProfilePlayerComponent } from "../components/database/components/database-profile-player/database-profile-player.component";
import { ProfilComponent } from "../components/players/components/profil/profil.component";

const routes: Routes = [

  {
    path: "ranking",
    component: RankingComponent,
    children: [
      { path: "", component: RankingPlayersComponent },
      { path: "players-post", component: RankingPlayersComponent },
      {
        path: "list-players-post/:id",
        component: RankingListPlayersPostComponent,
      },
      {
        path: "profile-player/:id/:player_id",
        component: RankingProfilePlayerComponent,
      },
    ],
  },
  {
    path: "database",
    component: DatabaseComponent,
    children: [
      { path: "", component: DatabaseListPlayersPostComponent },
      {
        path: "list-players-post",
        component: DatabaseListPlayersPostComponent,
      },
      {
        path: "profile-player/:id/:player_id",
        component: DatabaseProfilePlayerComponent,
        children: [
          { path: "player-resume", component: DatabasePlayerResumeComponent },
          {
            path: "player-performance",
            component: DatabasePlayerPerformanceComponent,
          },
          {
            path: "player-medicale",
            component: DatabasePlayerMedicaleComponent,
          },
          {
            path: "player-individuelle",
            component: DatabasePlayerIndividuelleComponent,
          },
        ],
      },
    ],
  },
  {
    path: "players",
    component: PlayersComponent,
    children: [
      { path: "", component: ProfilComponent },
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
  },
  {
    path: "teams",component: TeamsComponent, children: [
      { path: "", component: OverviewComponent },
      {
        path: "overview",
        component: OverviewComponent,
      },
      {
        path: "equipe",
        component: EquipeComponent,
      },
      {
        path: "joueurs",
        component: JoueursComponent,
      },
      {
        path: "prochain-adversaire",
        component: ProchainAdversaireComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatahubRoutingModule {}
