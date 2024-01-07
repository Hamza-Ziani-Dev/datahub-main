import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-statistique-formation',
  templateUrl: './dialog-statistique-formation.component.html',
  styleUrls: ['./dialog-statistique-formation.component.css']
})
export class DialogStatistiqueFormationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<DialogStatistiqueFormationComponent> 
    ){}
 teamFormation : any;
  
  ngOnInit(): void {
    this.teamFormation = this.data?.statistiqueFormation
    console.log(this.teamFormation);
  
  }

 closeDialog(): void {
  this.dialogRef.close();
}

}
