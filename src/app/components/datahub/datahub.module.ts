import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatahubComponent } from './datahub.component';
import { PlayersComponent } from './components/players/players.component';
import { DatahubRoutingModule } from './routing/datahub-routing.module';
import { TwoPlayersByPostModule } from './dialogs/two-players-by-post/two-players-by-post.module';
import { MatTableModule } from '@angular/material/table';
import { ProgressBarComponent } from './dialogs/progress-bar/progress-bar.component';
import { RankingService } from './components/ranking/service/ranking.service';
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

import { TeamsComponent } from './components/teams/teams.component';
import { OverviewComponent } from './components/teams/components/overview/overview.component';
import { JoueursComponent } from './components/teams/components/joueurs/joueurs.component';
import { EquipeComponent } from './components/teams/components/equipe/equipe.component';
import { ProchainAdversaireComponent } from './components/teams/components/prochain-adversaire/prochain-adversaire.component';
import { RouterModule } from '@angular/router';

import { DatabasePlayerMedicaleComponent } from './components/database/components/database-player-medicale/database-player-medicale.component';
import { DatabasePlayerIndividuelleComponent } from './components/database/components/database-player-individuelle/database-player-individuelle.component';
import { DatabasePlayerResumeComponent } from './components/database/components/database-player-resume/database-player-resume.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { RankingListPlayersPostComponent } from './components/ranking/components/ranking-list-players-post/ranking-list-players-post.component';
import { RankingProfilePlayerComponent } from './components/ranking/components/ranking-profile-player/ranking-profile-player.component';
import { RankingPlayersComponent } from './components/ranking/components/ranking-players/ranking-players.component';
import { DatabaseComponent } from './components/database/database.component';
import { DatabaseListPlayersPostComponent } from './components/database/components/database-list-players-post/database-list-players-post.component';
import { DatabaseProfilePlayerComponent } from './components/database/components/database-profile-player/database-profile-player.component';
import { ProfilComponent } from './components/players/components/profil/profil.component';
import { DatabasePlayerPerformanceComponent } from './components/database/components/database-player-performance/database-player-performance.component';
import { DatabaseService } from './components/database/service/database.service';

@NgModule({
  imports: [
    CommonModule,
    DatahubRoutingModule,
    TwoPlayersByPostModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,

  ],
  declarations: [
    DatahubComponent,
    PlayersComponent,
    RankingComponent,
    ProgressBarComponent,
    RankingPlayersComponent,
    RankingListPlayersPostComponent,
    RankingProfilePlayerComponent,
    DatabasePlayerPerformanceComponent,
    DatabasePlayerMedicaleComponent,
    DatabasePlayerIndividuelleComponent,
    DatabasePlayerResumeComponent ,
    DatabaseListPlayersPostComponent,
    DatabaseProfilePlayerComponent,

    // Players 
    ProfilComponent,
    SimilarComponent,
    ComparisonComponent,
    RangeslideDirective,
    DatabaseComponent,
    TeamsComponent,
    OverviewComponent,
    JoueursComponent,
    EquipeComponent,
    ProchainAdversaireComponent,
    
  ],
  providers: [
    RankingService,
    DatabaseService,
    PlayersService,
  ]
})
export class DatahubModule { }
