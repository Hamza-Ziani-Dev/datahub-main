import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../service/teams.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const _ELEMENT_DATA: any = {
  'all': {
    headers:[
      {
        label : 'Points',
        children : [
          {label:'PARENT 1',colspan:3},
          {label:'PARENT 2',colspan:3},
          {label:'PARENT 3',colspan:3}
        ]
      }
    ],
    values : [   
      {
        'id':1,
        "Équipe": {
          "name": "Chabab Mohammédia",
          "img": "images/logos/clubs/Chabab Mohammédia.jpg"
        },
        "Points": 52,
        "positionnelle": 1246,
        "Contre attaque": 84,
        "Coups Arrêtés": 1506,
        "Buts": 50,
        "xGA": 1.165,
        "xGA dif": -3.89
      },
      {
        'id':1,
        "Équipe": {
          "name": "Chabab Mohammédia",
          "img": "images/logos/clubs/Chabab Mohammédia.jpg"
        },
        "Points": 52,
        "positionnelle": 1246,
        "Contre attaque": 84,
        "Coups Arrêtés": 1506,
        "Buts": 50,
        "xGA": 1.165,
        "difference": -3.89
      },
      {
        'id':1,
        "Équipe": {
          "name": "Chabab Mohammédia",
          "img": "images/logos/clubs/Chabab Mohammédia.jpg"
        },
        "Points": 52,
        "positionnelle": 1246,
        "Contre attaque": 84,
        "Coups Arrêtés": 1506,
        "Buts": 50,
        "xGA": 1.165,
        "difference": -3.89
      },
    ]
  },
  'pertes de balles': [
    {
      Équipe: {
        name: 'Chabab Mohammédia',
        img: 'images/logos/clubs/Chabab Mohammédia.jpg',
      },
      'P.Bas': 1143.0,
      'P.Moyen': 2093.0,
      'P.Élevé': 2492.0,
    },
    {
      Équipe: {
        name: 'Difaâ El Jadida',
        img: 'images/logos/clubs/Difaâ El Jadida.jpg',
      },
      'P.Bas': 539.0,
      'P.Moyen': 1191.0,
      'P.Élevé': 1472.0,
    },
    {
      Équipe: {
        name: 'Chabab Mohammédia',
        img: 'images/logos/clubs/Chabab Mohammédia.jpg',
      },
      'P.Bas': 1143.0,
      'P.Moyen': 2093.0,
      'P.Élevé': 2492.0,
    },
    {
      Équipe: {
        name: 'Difaâ El Jadida',
        img: 'images/logos/clubs/Difaâ El Jadida.jpg',
      },
      'P.Bas': 539.0,
      'P.Moyen': 1191.0,
      'P.Élevé': 1472.0,
    },
  ],
  'recuperations de balles': [
    {
      Équipe: {
        name: 'Chabab Mohammédia',
        img: 'images/logos/clubs/Chabab Mohammédia.jpg',
      },
      PPDA: 778.39,
      'R.Bas': 2484.0,
      'R.Moyen': 1496.0,
      'R.Élevé': 488.0,
    },
    {
      Équipe: {
        name: 'Difaâ El Jadida',
        img: 'images/logos/clubs/Difaâ El Jadida.jpg',
      },
      PPDA: 245.37,
      'R.Bas': 1175.0,
      'R.Moyen': 919.0,
      'R.Élevé': 313.0,
    },
    {
      Équipe: {
        name: 'Chabab Mohammédia',
        img: 'images/logos/clubs/Chabab Mohammédia.jpg',
      },
      PPDA: 778.39,
      'R.Bas': 2484.0,
      'R.Moyen': 1496.0,
      'R.Élevé': 488.0,
    },
    {
      Équipe: {
        name: 'Chabab Mohammédia',
        img: 'images/logos/clubs/Chabab Mohammédia.jpg',
      },
      PPDA: 778.39,
      'R.Bas': 2484.0,
      'R.Moyen': 1496.0,
      'R.Élevé': 488.0,
    },
  ],
  'XGA ': [
    {
      PPDA: 778.39,
      'R.Bas': 2484.0,
      'R.Moyen': 1496.0,
      'R.Élevé': 488.0,
    },
    {
      PPDA: 245.37,
      'R.Bas': 1175.0,
      'R.Moyen': 919.0,
      'R.Élevé': 313.0,
    },
    {
      PPDA: 778.39,
      'R.Bas': 2484.0,
      'R.Moyen': 1496.0,
      'R.Élevé': 488.0,
    },
    {
      PPDA: 778.39,
      'R.Bas': 2484.0,
      'R.Moyen': 1496.0,
      'R.Élevé': 488.0,
    },
  ],
  'Distribution de Passes': [
    {
      PPDA: 778.39,
      'R.Bas': 2484.0,
      'R.Moyen': 1496.0,
      'R.Élevé': 488.0,
    },
    {
      PPDA: 245.37,
      'R.Bas': 1175.0,
      'R.Moyen': 919.0,
      'R.Élevé': 313.0,
    },
    {
      PPDA: 778.39,
      'R.Bas': 2484.0,
      'R.Moyen': 1496.0,
      'R.Élevé': 488.0,
    },
    {
      PPDA: 778.39,
      'R.Bas': 2484.0,
      'R.Moyen': 1496.0,
      'R.Élevé': 488.0,
    },
  ],
  
};
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  // @ViewChild(MatSort, { static: true }) sort: MatSort; 
  activeButton: string = 'table'; // Initially, no button is active
  setActiveButton(buttonId: string) {
    this.activeButton = buttonId;
  }
  
  constructor(private teamsService: TeamsService,private route: ActivatedRoute ) {}
  //  displayedColumns: string[] = ['pos', 'teams', 'poits', 'positionnelle','contre', 'coups-pied-arrêtés','buts','xga','xg-diffirence'];
  // ngOnInit() {
  //     this.teamsService.getListAttaques().subscribe((res)=>{
  //     this.dataSource = res;
  //   });
  // }

   displayedParentColumns: string[] = [];  // For get the parent columns
   displayedColumns: string[] = [];   // For get the children of parent column at var defaultTab
   dataSource = [];
   // default tab selected 
   defaultTab: string = 'all';
   ELEMENT_DATA: any;
   ngOnInit(): void {
        this.teamsService.getListAttaques().subscribe((res)=>{
    });
    this.ELEMENT_DATA = _ELEMENT_DATA;
     this.displayedParentColumns = Object.keys(this.ELEMENT_DATA); // get the parent columns : ['pertes de balles','recuperations de balles']
     this.activeButton = this.displayedParentColumns[0]; // Assuming displayedParentColumns is your column array
     this.UpdateTableColumnsDataSource();
   }
   
   actions(tab: string) { // Fun for on click at some tab change the varaibale needed like : 
     this.defaultTab = tab; // change default value 
     this.UpdateTableColumnsDataSource();
   }
 
  UpdateTableColumnsDataSource() {
    const __ELEMENT_DATA = JSON.parse(JSON.stringify(this.ELEMENT_DATA));
    const values = this.defaultTab === 'all' ? // Get the values based on the defaultTab
      __ELEMENT_DATA[this.defaultTab].values :
      __ELEMENT_DATA[this.defaultTab];
    this.displayedColumns = Object.keys(values[0]); // Construct the displayedColumns dynamically using the first object's keys
  
   
    this.dataSource = values; // Update the dataSource with the values
  }

  
  

   }

