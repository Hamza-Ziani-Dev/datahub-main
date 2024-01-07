import { Component, OnInit, ViewChild } from "@angular/core";
import { TeamsService } from "../../service/teams.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { DialogRankingComponent } from "../dialogs-teams/dialog-ranking/dialog-ranking.component";

export interface PeriodicElement {
  name: string;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: "Hydrogen", weight: 1.0079 },
  { name: "Helium", weight: 4.0026 },
  { name: "Lithium", weight: 6.941 },
  { name: "Beryllium", weight: 9.0122 },
];
export interface TableData {
  pos: string;
  equipe: string;
  matches: string;
  v: string;
  d: string;
  n: string;
  bp: string;
  bc: string;
  xgp: string;
  xgc: string;
  xgd: string;
}
@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"],
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ["demo-name", "demo-weight"];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private teamsService: TeamsService, public dialog: MatDialog) {}
  showTable: string = "table1";
  matches: TableData[];
  sortedData: TableData[];

  isActive: string = "tableClassement"; // Keeps track of the active button
  setActive(buttonId: string) {
    this.isActive = buttonId;
  }
  headerDataGoals: any = [];
  bodyDataGoals: any = [];
  dataGoals: any;
  headerDataXg: any = [];
  bodyDataXg: any = [];
  dataXG: any;
  headerDataTirs: any = [];
  bodyDataTirs: any = [];
  dataTirs: any;
  headerDataTirCadre: any = [];
  bodyDataTirCadre: any = [];
  dataTirsCadres: any;
  headerDataButsCon: any = [];
  bodyDataButsCon: any = [];
  dataButsConcedes: any;
  headerDataXgAgain: any = [];
  bodyDataXgAgain: any = [];
  dataXgAgain: any;
  headerDataTirsContre: any = [];
  bodyDataTirsContre: any = [];
  dataTirsContre: any;
  headerDataTirsContreCadre: any = [];
  bodyDataTirsContreCadre: any = [];
  dataTirsContreCadre: any;
  headerDataFautes: any = [];
  bodyDataFautes: any = [];
  dataFautes: any;
  headerDataCarteJoune: any = [];
  bodyDataCarteJoune: any = [];
  dataCartonsJaunes: any;
  headerDataCarteRouge: any = [];
  bodyDataCarteRouge: any = [];
  dataCartonsRouges: any;
  headerDataPossession: any = [];
  bodyDataPossession: any = [];
  dataPossession: any;

  ngOnInit() {
    this.teamsService.getListTable().subscribe((res) => {
      this.matches = res;
      this.sortedData = this.matches.slice();
    });
    this.getRankingInfos();
  }

  sortData(sort: Sort) {
    const data = this.matches.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "pos":
          return compare(a.pos, b.pos, isAsc);
        case "equipe":
          return compare(a.equipe, b.equipe, isAsc);
        case "matches":
          return compare(a.matches, b.matches, isAsc);
        case "v":
          return compare(a.v, b.v, isAsc);
        case "d":
          return compare(a.d, b.d, isAsc);
        case "n":
          return compare(a.n, b.n, isAsc);
        case "bp":
          return compare(a.bp, b.bp, isAsc);
        case "bc":
          return compare(a.bc, b.bc, isAsc);
        case "xgp":
          return compare(a.xgp, b.xgp, isAsc);
        case "xgc":
          return compare(a.xgc, b.xgc, isAsc);
        case "xgd":
          return compare(a.xgd, b.xgd, isAsc);
        default:
          return 0;
      }
      function compare(a: number | string, b: number | string, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
      }
    });
  }

  getRankingInfos() {
    this.teamsService.getRankingInfo().subscribe((res: any[]) => {
      this.dataGoals = res["Buts"];
      this.headerDataGoals = res["Buts"][0]["header"][0];
      this.bodyDataGoals = res["Buts"][1]["body"];

      this.dataXG = res["xG"];
      this.headerDataXg = res["xG"][0]["header"][0];
      this.bodyDataXg = res["xG"][1]["body"];

      this.dataTirs = res["Tirs"];
      this.headerDataTirs = res["Tirs"][0]["header"][0];
      this.bodyDataTirs = res["Tirs"][1]["body"];

      this.dataTirsCadres = res["Tirs_cadres"];
      this.headerDataTirCadre = res["Tirs_cadres"][0]["header"][0];
      this.bodyDataTirCadre = res["Tirs_cadres"][1]["body"];

      this.dataButsConcedes = res["Buts_concedes"];
      this.headerDataButsCon = res["Buts_concedes"][0]["header"][0];
      this.bodyDataButsCon = res["Buts_concedes"][1]["body"];

      this.dataXgAgain = res["XG_against"];
      this.headerDataXgAgain = res["XG_against"][0]["header"][0];
      this.bodyDataXgAgain = res["XG_against"][1]["body"];

      this.dataTirsContre = res["Tirs contre"];
      this.headerDataTirsContre = res["Tirs contre"][0]["header"][0];
      this.bodyDataTirsContre = res["Tirs contre"][1]["body"];

      this.dataTirsContreCadre = res["Tirs_contre_cadres"];
      this.headerDataTirsContreCadre =
        res["Tirs_contre_cadres"][0]["header"][0];
      this.bodyDataTirsContreCadre = res["Tirs_contre_cadres"][1]["body"];

      this.dataFautes = res["Fautes"];
      this.headerDataFautes = res["Fautes"][0]["header"][0];
      this.bodyDataFautes = res["Fautes"][1]["body"];

      this.dataCartonsJaunes = res["Cartons_jaunes"];
      this.headerDataCarteJoune = res["Cartons_jaunes"][0]["header"][0];
      this.bodyDataCarteJoune = res["Cartons_jaunes"][1]["body"];

      this.dataCartonsRouges = res["Cartons_rouges"];
      this.headerDataCarteRouge = res["Cartons_rouges"][0]["header"][0];
      this.bodyDataCarteRouge = res["Cartons_rouges"][1]["body"];

      this.dataPossession = res["Possession"];
      this.headerDataPossession = res["Possession"][0]["header"][0];
      this.bodyDataPossession = res["Possession"][1]["body"];
    });
  }

  openDialogWithDataType(data: any, type: string) {
    const dialogRef = this.dialog.open(DialogRankingComponent, {
      height: "520px",
      data: {
        type: type,
        data: data,
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the result if needed
      }
    });
  }
 
  openDialogWithType(type: string) {
    let data;
    switch (type) {
      case "Goals":
        data = this.dataGoals;
        break;
      case "XG":
        data = this.dataXG;
        break;
      case "Tirs":
        data = this.dataTirs;
        break;
      case "TirsCadres":
        data = this.dataTirs;
        break;
      case "ButsConcedes":
        data = this.dataTirs;
        break;
      case "XG_Again":
        data = this.dataTirs;
        break;
      case "TirsContre":
        data = this.dataTirs;
        break;
      case "TirsContreCadre":
        data = this.dataTirs;
        break;
      case "Fautes":
        data = this.dataTirs;
        break;
      case "CartonsJounes":
        data = this.dataTirs;
        break;
      case "CartonsRouges":
        data = this.dataTirs;
        break;
      case "Possession":
        data = this.dataTirs;
        break;

      default:
        break;
    }

    this.openDialogWithDataType(data, type);
  }

  // openDialogWithGoalsData() {
  //   const dataGoals = this.dataGoals;
  //   const type = 'Goals';
  //   this.openDialogRanking(dataGoals,type);
  // }

  // openDialogWithXGData() {
  //   const dataXG = this.dataXG;
  //   const type = 'XG';
  //   this.openDialogRanking(dataXG,type);
  // }

  // openDialogWithTirsData() {
  //   const dataTirs = this.dataTirs;
  //   const type = 'Tirs';
  //   this.openDialogRanking(dataTirs,type);
  // }
  // openDialogWithTirsCadresData() {
  //   const dataTirsCadres = this.dataTirsCadres;
  //   const type = 'TirsCadres';
  //   this.openDialogRanking(dataTirsCadres,type);
  // }
  // openDialogWithButsConcedesData() {
  //   const dataButsConcedes = this.dataButsConcedes;
  //   const type = 'ButsConcedes';
  //   this.openDialogRanking(dataButsConcedes,type);
  // }

  // openDialogWithXgAgainData() {
  //   const dataXgAgain = this.dataXgAgain;
  //   const type = 'XG_Again';
  //   this.openDialogRanking(dataXgAgain,type);
  // }

  // openDialogWithTirsContreData() {
  //   const dataTirsContre = this.dataTirsContre;
  //   const type = 'TirsContre';
  //   this.openDialogRanking(dataTirsContre,type);
  // }

  // openDialogWithTirsContreCadreData() {
  //   const dataTirsContreCadre = this.dataTirsContreCadre;
  //   const type = 'TirsContreCadre';
  //   this.openDialogRanking(dataTirsContreCadre,type);
  // }

  // openDialogWithFautesData() {
  //   const dataFautes = this.dataFautes;
  //   const type = 'Fautes';
  //   this.openDialogRanking(dataFautes,type);
  // }

  // openDialogWithCartonsJaunesData() {
  //   const dataCartonsJaunes = this.dataCartonsJaunes;
  //   const type = 'CartonsJaunes';
  //   this.openDialogRanking(dataCartonsJaunes,type);
  // }
  // openDialogWithCartonsRougesData() {
  //   const dataCartonsRouges = this.dataCartonsRouges;
  //   const type = 'CartonsRouges';
  //   this.openDialogRanking(dataCartonsRouges,type);
  // }

  // openDialogWithPossessionData() {
  //   const dataPossession = this.dataPossession;
  //   const type = 'Possession';
  //   this.openDialogRanking(dataPossession,type);
  // }

  // openDialogRanking(data: any,type: string) {
  //   const dialogRef = this.dialog.open(DialogRankingComponent, {
  //     height: '520px',
  //     data: {
  //       type: type,
  //       data: data
  //     },
  //     disableClose: true,
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       // Handle the result if needed
  //     }
  //   });
  // }
}
