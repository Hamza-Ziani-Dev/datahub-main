import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TeamsService } from 'src/app/components/datahub/components/teams/service/teams.service';
@Component({
  selector: 'app-table-statistique-formation',
  templateUrl: './table-statistique-formation.component.html',
  styleUrls: ['./table-statistique-formation.component.css']
})
export class TableStatistiqueFormationComponent implements OnInit {
  constructor(
    private teamsService: TeamsService,
    private dialogRef: MatDialogRef<TableStatistiqueFormationComponent> 
    ){}
 teamFormation : any;
  
  ngOnInit(): void {
    this.getTeamFormation();
  }
  getTeamFormation(){
  this.teamsService.getTeamFormation().subscribe((res)=>{
    this.teamFormation = res;
  })
 }
 closeDialog(): void {
  this.dialogRef.close();
}

}
