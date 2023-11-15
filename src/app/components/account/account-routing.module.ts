import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AuthGuard } from '../../guards/auth.guard';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountClubsComponent } from './account-clubs/account-clubs.component';
import { EditClubComponent } from './edit-club/edit-club.component';
import { AddClubComponent } from './add-club/add-club.component';
import { CompetitionsComponent } from './competitions/competitions.component';

const routes: Routes = [
  {
    path: '', component: AccountComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: AccountDashboardComponent },
      { path: 'clubs', component: AccountClubsComponent },
      { path: 'editClub/:id', component: EditClubComponent },
      { path: 'addClub', component: AddClubComponent },
      { path: 'competitions', component: CompetitionsComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
