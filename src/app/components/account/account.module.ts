import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountClubsComponent } from './account-clubs/account-clubs.component';
import { FormsModule } from '@angular/forms';
import { EditClubComponent } from './edit-club/edit-club.component';
import { AddClubComponent } from './add-club/add-club.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CompetitionsComponent } from './competitions/competitions.component';
import { LoadingModule } from 'src/app/custom-component/loading/loading.module';

@NgModule({
  declarations: [
    AccountComponent,
    AccountDashboardComponent,
    AccountClubsComponent,
    EditClubComponent,
    AddClubComponent,
    CompetitionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoadingModule,
    MatFormFieldModule, MatButtonModule, MatInputModule,
    MatProgressSpinnerModule, MatMenuModule, MatSelectModule,
    MatSlideToggleModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
