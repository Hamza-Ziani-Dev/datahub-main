import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { RangeslideDirective } from 'src/app/shared/directives/rangeslide.directive';
import { ClassementComponent } from './components/classement/classement.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { CompetitionsComponent } from './competitions.component';
import { CompetitionsRoutingModule } from './routing/competitions-routing.module';


@NgModule({
  declarations: [
    ClassementComponent,
    ResultatsComponent,
    CompetitionsComponent
  ],
  imports: [
    CommonModule,
    CompetitionsRoutingModule,
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    
   
  ]
})
export class CompetitionsModule { }
