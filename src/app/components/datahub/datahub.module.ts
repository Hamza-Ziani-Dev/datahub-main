import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatahubComponent } from './datahub.component';
import { PlayersComponent } from './components/players/players.component';
import { DatabaseComponent } from './components/database/database.component';
import { DatahubRoutingModule } from './routing/datahub-routing.module';
import { TwoPlayersByPostModule } from './dialogs/two-players-by-post/two-players-by-post.module';
import { DatabaseProfilePlayerComponent } from './components/database/components/database-profile-player/database-profile-player.component';
import { DatabaseListPlayersPostComponent } from './components/database/components/database-list-players-post/database-list-players-post.component';
import { MatTableModule } from '@angular/material/table';
import { ProgressBarComponent } from './dialogs/progress-bar/progress-bar.component';
import { DatabaseService } from './components/database/service/database.service';
import { ProfilComponent } from './components/players/components/profil/profil.component';
import { SimilarComponent } from './components/players/components/similar/similar.component';
import { ComparisonComponent } from './components/players/components/comparison/comparison.component';
import { PlayersService } from './components/players/service/players.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { RangeslideDirective } from 'src/app/shared/directives/rangeslide.directive';
import { DatabasePlayerPerformanceComponent } from './components/database/components/database-player-performance/database-player-performance.component';
import { DatabasePlayerIndividuelleComponent } from './components/database/components/database-player-individuelle/database-player-individuelle.component';
import { DatabasePlayerMedicaleComponent } from './components/database/components/database-player-medicale/database-player-medicale.component';
import { DatabasePlayerResumeComponent } from './components/database/components/database-player-resume/database-player-resume.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { RankingProfilePlayerComponent } from './components/ranking/components/ranking-profile-player/ranking-profile-player.component';
import { RankingListPlayersPostComponent } from './components/ranking/components/ranking-list-players-post/ranking-list-players-post.component';
import { RankingPlayersComponent } from './components/ranking/components/ranking-players/ranking-players.component';
import { RankingService } from './components/ranking/service/ranking.service';
import { LoadingThreePointsModule } from 'src/app/shared/components/loading-three-points/loading-three-points.module';
import { MatButtonModule } from '@angular/material/button';
import { UpdatePhysiqueComponent } from './dialogs/update-physique/update-physique.component';
import { PaginationBlockComponent } from './dialogs/pagination-block/pagination-block.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TeamsComponent } from './components/teams/teams.component';
import { DialogRankingComponent } from './components/teams/components/dialogs-teams/dialog-ranking/dialog-ranking.component';
import { DialogEquipeComponent } from './components/teams/components/dialogs-teams/dialog-equipe/dialog-equipe.component';
import { DialogJoueurComponent } from './components/teams/components/dialogs-teams/dialog-joueur/dialog-joueur.component';
import { DialogDistributionComponent } from './components/teams/components/dialogs-teams/dialog-distribution/dialog-distribution.component';
import { DialogOffensiveComponent } from './components/teams/components/dialogs-teams/dialog-offensive/dialog-offensive.component';
import { DialogDeffensiveComponent } from './components/teams/components/dialogs-teams/dialog-deffensive/dialog-deffensive.component';
import { DialogStatistiqueFormationComponent } from './components/teams/components/dialogs-teams/dialog-statistique-formation/dialog-statistique-formation.component';
import { TeamsService } from './components/teams/service/teams.service';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { OverviewComponent } from './components/teams/components/overview/overview.component';
import { EquipeComponent } from './components/teams/components/equipe/equipe.component';
import { JoueursComponent } from './components/teams/components/joueurs/joueurs.component';
import { ProchainAdversaireComponent } from './components/teams/components/prochain-adversaire/prochain-adversaire.component';
// import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    DatahubRoutingModule,
    TwoPlayersByPostModule,
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatInputModule,
    // MatIconModule
  ],
  declarations: [
    DatahubComponent,
    PlayersComponent,
    DatabaseComponent,
    PaginationBlockComponent,
    ProgressBarComponent,
    DatabaseListPlayersPostComponent,
    DatabaseProfilePlayerComponent,
    DatabasePlayerPerformanceComponent,
    DatabasePlayerResumeComponent,
    DatabasePlayerIndividuelleComponent,
    DatabasePlayerMedicaleComponent,
    RankingComponent,
    UpdatePhysiqueComponent,
    RankingPlayersComponent,
    RankingListPlayersPostComponent,
    RankingProfilePlayerComponent,
    // Players 
    ProfilComponent,
    SimilarComponent,
    ComparisonComponent,
    RangeslideDirective,
    // Teams
    TeamsComponent,
    OverviewComponent,
    EquipeComponent,
    JoueursComponent,
    ProchainAdversaireComponent,
    DialogRankingComponent,
    DialogEquipeComponent,
    DialogJoueurComponent,
    DialogDistributionComponent,
    DialogOffensiveComponent,
    DialogDeffensiveComponent,
    DialogStatistiqueFormationComponent,
  ],
  providers: [
    DatabaseService,
    RankingService,
    PlayersService,
    TeamsService,
  ]
})
export class DatahubModule { }
