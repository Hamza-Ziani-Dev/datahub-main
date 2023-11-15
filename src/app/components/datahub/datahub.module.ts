import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatahubComponent } from './datahub.component';
import { PlayersComponent } from './components/players/players.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { DatahubRoutingModule } from './routing/datahub-routing.module';
import { TwoPlayersByPostModule } from './dialogs/two-players-by-post/two-players-by-post.module';
import { RankingProfilePlayerComponent } from './components/ranking/components/ranking-profile-player/ranking-profile-player.component';
import { RankingListPlayersPostComponent } from './components/ranking/components/ranking-list-players-post/ranking-list-players-post.component';
import { RankingPlayersComponent } from './components/ranking/components/ranking-players/ranking-players.component';
import { MatTableModule } from '@angular/material/table';
import { ProgressBarComponent } from './dialogs/progress-bar/progress-bar.component';
import { RankingService } from './components/ranking/service/ranking.service';
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
import { RankingPlayerPerformanceComponent } from './components/ranking/components/ranking-player-performance/ranking-player-performance.component';
import { RankingPlayerMedicaleComponent } from './components/ranking/components/ranking-player-medicale/ranking-player-medicale.component';
import { RankingPlayerIndividuelleComponent } from './components/ranking/components/ranking-player-individuelle/ranking-player-individuelle.component';
import { RankingPlayerResumeComponent } from './components/ranking/components/ranking-player-resume/ranking-player-resume.component';

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

  ],
  declarations: [
    DatahubComponent,
    PlayersComponent,
    RankingComponent,
    ProgressBarComponent,
    RankingPlayersComponent,
    RankingListPlayersPostComponent,
    RankingProfilePlayerComponent,
    // Players 
    ProfilComponent,
    SimilarComponent,
    ComparisonComponent,
    RangeslideDirective,
    RankingPlayerPerformanceComponent,
    RankingPlayerMedicaleComponent,
    RankingPlayerIndividuelleComponent,
    RankingPlayerResumeComponent,
  ],
  providers: [
    RankingService,
    PlayersService
  ]
})
export class DatahubModule { }
