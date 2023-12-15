import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamsService } from '../../service/teams.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';

export interface TableData{
  pos :string,equipe :string,matches :string,v:string,d:string,n:string,bp:string,bc:string,xgp:string,xgc:string,xgd:string
}
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})

export class OverviewComponent implements OnInit {
  constructor(private teamsService: TeamsService,) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   showTable: string = 'table1'; 
   matches: TableData[];
   sortedData: TableData[];
   isActive: string = 'tableClassement'; // Keeps track of the active button
   setActive(buttonId: string) {this.isActive = buttonId}
   headerDataGoals :any = [];bodyDataGoals :any = [];
   headerDataXg : any =[];bodyDataXg : any =[];
   headerDataTirs : any = [];bodyDataTirs : any =[];
   headerDataTirCadre : any = []; bodyDataTirCadre :any =[];
   headerDataButsCon :any =[]; bodyDataButsCon :any =[];
   headerDataXgAgain : any=[];bodyDataXgAgain :any =[];
   headerDataTirsContre : any=[];bodyDataTirsContre :any =[];
   headerDataTirsContreCadre : any=[];bodyDataTirsContreCadre :any =[];
   headerDataFautes : any=[];bodyDataFautes :any =[];
   headerDataCarteJoune : any =[];bodyDataCarteJoune : any =[];
   headerDataCarteRouge : any =[];bodyDataCarteRouge : any =[];
   headerDataPossession : any=[]; bodyDataPossession : any = [];
  

   
ngOnInit() {
    this.teamsService.getListTable().subscribe((res)=>{
      this.matches = res;
      this.sortedData = this.matches.slice();
    });
    this.getRankingInfos();
} 

sortData(sort: Sort) {
    const data = this.matches.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'pos': return compare(a.pos, b.pos, isAsc);
        case 'equipe': return compare(a.equipe, b.equipe, isAsc);
        case 'matches': return compare(a.matches, b.matches, isAsc);
        case 'v': return compare(a.v, b.v, isAsc);
        case 'd': return compare(a.d, b.d, isAsc);
        case 'n': return compare(a.n, b.n, isAsc);
        case 'bp': return compare(a.bp, b.bp, isAsc);
        case 'bc': return compare(a.bc, b.bc, isAsc);
        case 'xgp': return compare(a.xgp, b.xgp, isAsc);
        case 'xgc': return compare(a.xgc, b.xgc, isAsc);
        case 'xgd': return compare(a.xgd, b.xgd, isAsc);
        default: return 0;
      }
      function compare(a: number | string, b: number | string, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
      }
    });
}
  
getRankingInfos(){
  this.teamsService.getRankingInfo().subscribe((res :any[])=>{
    this.headerDataGoals = res['Buts'][0]['header'][0];this.bodyDataGoals = res['Buts'][1]['body'];
    this.headerDataXg = res['xG'][0]['header'][0];this.bodyDataXg = res['xG'][1]['body'];
    this.headerDataTirs = res['Tirs'][0]['header'][0];this.bodyDataTirs = res['Tirs'][1]['body'];
    this.headerDataTirCadre = res['Tirs_cadres'][0]['header'][0];this.bodyDataTirCadre = res['Tirs_cadres'][1]['body'];
    this.headerDataButsCon = res['Buts_concedes'][0]['header'][0];this.bodyDataButsCon = res['Buts_concedes'][1]['body'];
    this.headerDataXgAgain = res['XG_against'][0]['header'][0];this.bodyDataXgAgain = res['XG_against'][1]['body'];
    this.headerDataTirsContre = res['Tirs contre'][0]['header'][0];this.bodyDataTirsContre = res['Tirs contre'][1]['body'];
    this.headerDataTirsContreCadre = res['Tirs_contre_cadres'][0]['header'][0];this.bodyDataTirsContreCadre = res['Tirs_contre_cadres'][1]['body'];
    this.headerDataFautes= res['Fautes'][0]['header'][0];this.bodyDataFautes = res['Fautes'][1]['body'];
    this.headerDataCarteJoune= res['Cartons_jaunes'][0]['header'][0];this.bodyDataCarteJoune = res['Cartons_jaunes'][1]['body'];
    this.headerDataCarteRouge= res['Cartons_rouges'][0]['header'][0];this.bodyDataCarteRouge = res['Cartons_rouges'][1]['body'];
    this.headerDataPossession= res['Possession'][0]['header'][0];this.bodyDataPossession = res['Possession'][1]['body'];
});
}  

}





   

