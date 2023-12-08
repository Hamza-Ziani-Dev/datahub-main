import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatahubComponent } from './datahub.component';
import { PlayersComponent } from './components/players/players.component';
import { DatabaseComponent } from './components/database/database.component';
import { DatahubRoutingModule } from './routing/datahub-routing.module';
import { TwoPlayersByPostModule } from './dialogs/two-players-by-post/two-players-by-post.module';
import { DatabaseProfilePlayerComponent } from './components/database/components/database-profile-player/database-profile-player.component';
import { DatabaseListPlayersPostComponent } from './components/database/components/database-list-players-post/database-list-players-post.component';
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
import { CdkTableModule } from '@angular/cdk/table';
import { TeamsComponent } from './components/teams/teams.component';
import {MatTableModule } from '@angular/material/table';
import { OverviewComponent } from './components/teams/components/overview/overview.component';
import { JoueursComponent } from './components/teams/components/joueurs/joueurs.component';

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
   
  ],
  declarations: [
    OverviewComponent,
    JoueursComponent,
    DatahubComponent,
    PlayersComponent,
    DatabaseComponent,
    ProgressBarComponent,
    DatabaseListPlayersPostComponent,
    DatabaseProfilePlayerComponent,
    DatabasePlayerPerformanceComponent,
    DatabasePlayerResumeComponent,
    DatabasePlayerIndividuelleComponent,
    DatabasePlayerMedicaleComponent,
    RankingComponent,
    RankingPlayersComponent,
    RankingListPlayersPostComponent,
    RankingProfilePlayerComponent,
    // Players 
    ProfilComponent,
    SimilarComponent,
    ComparisonComponent,
    RangeslideDirective,
    TeamsComponent
  ],
  providers: [
    DatabaseService,
    RankingService,
    PlayersService
  ]
})
export class DatahubModule { }
