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
      // console.log(res);
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
      this.dataGoals = res["Goals"];
      this.headerDataGoals = res["Goals"][0]
      this.bodyDataGoals = res["Goals"].slice(1, 5);

      this.dataXG = res["xG"];
      this.headerDataXg = res["xG"][0];
      this.bodyDataXg = res["xG"].slice(1, 5);

      this.dataTirs = res["Tirs"];
      this.headerDataTirs = res["Tirs"][0]
      this.bodyDataTirs = res["Tirs"].slice(1, 5);

      this.dataTirsCadres = res["Tirs Encadres"];
      this.headerDataTirCadre = res["Tirs Encadres"][0];
      this.bodyDataTirCadre = res["Tirs Encadres"].slice(1, 5);

      this.dataButsConcedes = res["Buts Concedes"];
      this.headerDataButsCon = res["Buts Concedes"][0];
      this.bodyDataButsCon = res["Buts Concedes"].slice(1, 5);

      this.dataXgAgain = res["Tirs Contre"];
      this.headerDataXgAgain = res["Tirs Contre"][0]
      this.bodyDataXgAgain = res["Tirs Contre"].slice(1, 5);

      this.dataTirsContre = res["Tirs Contre"];
      this.headerDataTirsContre = res["Tirs Contre"][0];
      this.bodyDataTirsContre = res["Tirs Contre"].slice(1, 5);

      this.dataTirsContreCadre = res["Tirs Contre Cadres"];
      this.headerDataTirsContreCadre = res["Tirs Contre Cadres"][0];
      this.bodyDataTirsContreCadre = res["Tirs Contre Cadres"].slice(1, 5);

      this.dataFautes = res["Fautes"];
      this.headerDataFautes = res["Fautes"][0];
      this.bodyDataFautes = res["Fautes"].slice(1, 5);

      this.dataCartonsJaunes = res["Cartes Jaunes"];
      this.headerDataCarteJoune = res["Cartes Jaunes"][0];
      this.bodyDataCarteJoune = res["Cartes Jaunes"].slice(1, 5);

      this.dataCartonsRouges = res["Cartes Rouges"];
      this.headerDataCarteRouge = res["Cartes Rouges"][0];
      this.bodyDataCarteRouge = res["Cartes Rouges"].slice(1, 5);

      this.dataPossession = res["Possession"];
      this.headerDataPossession = res["Possession"][0];
      this.bodyDataPossession = res["Possession"].slice(1, 5);
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
        console.log("Close Dialog");
        
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
 
}
