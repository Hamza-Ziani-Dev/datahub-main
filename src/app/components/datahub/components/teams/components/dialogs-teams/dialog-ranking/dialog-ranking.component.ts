import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ranking',
  templateUrl: './dialog-ranking.component.html',
  styleUrls: ['./dialog-ranking.component.css']
})
export class DialogRankingComponent implements OnInit {

  headerDataGoals :any = [];bodyDataGoals :any = [];
  headerDataXG :any = [];bodyDataXG :any = [];
  headerDataTirs : any = [];bodyDataTirs : any =[];
  headerDataTirCadre : any = []; bodyDataTirCadre :any =[]; 
  headerDataButsCon :any =[]; bodyDataButsCon :any =[];
  headerDataXgAgain : any=[];bodyDataXgAgain :any =[];
  headerDataTirsContre : any=[];bodyDataTirsContre :any =[];
  headerDataTirsContreCadre : any=[];bodyDataTirsContreCadre :any =[];
  headerDataFautes : any=[]; bodyDataFautes :any=[];
  headerDataCarteJoune :any=[]; bodyDataCarteJoune :any=[];
  headerDataCarteRouge :any=[]; bodyDataCarteRouge :any=[];
  headerDataPossession :any=[]; bodyDataPossession :any=[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<DialogRankingComponent>
 ){}
  ngOnInit(): void {
    const categories = [
      'Goals', 'XG', 'Tirs', 'TirCadre', 'ButsCon', 'XgAgain',
      'TirsContre', 'TirsContreCadre', 'Fautes', 'CarteJoune',
      'CarteRouge', 'Possession'
    ];

    

      this.headerDataGoals =this.data.data[0]['header'][0];
      this.bodyDataGoals = this.data.data[1]['body'];
   
      this.headerDataXG = this.data.data[0]['header'][0];
      this.bodyDataXG = this.data.data[1]['body'];


      this.headerDataTirs = this.data.data[0]['header'][0];
      this.bodyDataTirs = this.data.data[1]['body'];

      this.headerDataTirCadre = this.data.data[0]['header'][0];
      this.bodyDataTirCadre = this.data.data[1]['body'];

      this.headerDataButsCon = this.data.data[0]['header'][0];
      this.bodyDataButsCon = this.data.data[1]['body'];

      this.headerDataXgAgain = this.data.data[0]['header'][0];
      this.bodyDataXgAgain = this.data.data[1]['body'];

      this.headerDataTirsContre = this.data.data[0]['header'][0];
      this.bodyDataTirsContre = this.data.data[1]['body'];


      this.headerDataTirsContreCadre = this.data.data[0]['header'][0];
      this.bodyDataTirsContreCadre = this.data.data[1]['body'];

      this.headerDataFautes = this.data.data[0]['header'][0];
      this.bodyDataFautes = this.data.data[1]['body'];

      this.headerDataCarteJoune = this.data.data[0]['header'][0];
      this.bodyDataCarteJoune = this.data.data[1]['body'];
      
      this.headerDataCarteRouge = this.data.data[0]['header'][0];
      this.bodyDataCarteRouge = this.data.data[1]['body'];

      this.headerDataPossession = this.data.data[0]['header'][0];
      this.bodyDataPossession = this.data.data[1]['body'];
  }


  closeDialog(){
    this.dialogRef.close()
  }

}
