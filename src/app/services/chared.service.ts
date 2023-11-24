import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import * as XLSX from "xlsx";
import * as moment from "moment";
import * as FileSaver from "file-saver";
import { Observable } from "rxjs";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { SnackbarActionType } from "src/app/shared/components/snackbar/interface/Actions.enum";
import { environment } from "src/environments/environment";
import { SnackbarComponent } from "../shared/components/snackbar/snackbar.component";
import { DOCUMENT } from "@angular/common";
interface NoteHooper {
  max: number;
  min: number;
  label: string;
  color: string;
}
@Injectable({
  providedIn: "root",
})
export class CharedService {
  link: string = environment.link;
  API: string = environment.API;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }
  openSnackBar(ACTION: string, MESSAGE: string = null) {
    /*
        custom-snackbar-error 
        custom-snackbar-info 
        custom-snackbar-success 
        custom-snackbar-warning 
        */
    let message = "",
      icon = "",
      panelClass = "custom-snackbar-success";
    switch (ACTION) {
      case SnackbarActionType.IS_FIND:
        message = "Attention ce numéro de ciné existe déjà.";
        icon = "fas fa-times mr-2";
        panelClass = "custom-snackbar-warning";
        break;
      case SnackbarActionType.CONVOQUER_SUCCESS:
        message = "Convoqué terminé avec succès.";
        icon = "fas fa-user-plus mr-2";
        panelClass = "custom-snackbar-success";
        break;
      case SnackbarActionType.DateNotValid:
        message = "Date selected is not valid.";
        icon = "fas fa-calendar-times mr-2";
        panelClass = "custom-snackbar-warning";
        break;
      case SnackbarActionType.NOT_FOUND_PLAYERS:
        message = "Aucune donnée !";
        icon = "fas fa-users mr-2";
        panelClass = "custom-snackbar-info";
        break;
      case SnackbarActionType.PDFError:
        message = "Error generating PDF.";
        icon = "fas fa-calendar-times mr-2";
        panelClass = "custom-snackbar-info";
        break;
      case SnackbarActionType.success:
        message = "Enregistrement terminé avec succès.";
        icon = "fas fa-check-circle mr-2";
        panelClass = "custom-snackbar-success";
        break;
      case SnackbarActionType.deleteSuccess:
        message = "Suppression terminé avec succès.";
        icon = "fas fa-trash-alt mr-2";
        panelClass = "custom-snackbar-success";
        break;
      case SnackbarActionType.error:
        message = "Enregistrement n'a pas été terminé avec succès.";
        icon = "fas fa-exclamation-triangle mr-2";
        panelClass = "custom-snackbar-error";
        break;
      case SnackbarActionType.errorFile:
        message = MESSAGE;
        icon = "far fa-file-alt mr-2";
        panelClass = "custom-snackbar-error";
        break;
      case "pdf-download":
        message = "PDF download started.";
        icon = "fas fa-calendar-times mr-2";
        panelClass = "custom-snackbar-info";
        break;
      default:
        message = "Unknown action.";
        icon = "fas fa-calendar-times mr-2";
        panelClass = "custom-snackbar-info";
    }

    const defaultConf = {
      duration: 3 * 1000,
      horizontalPosition: "center" as MatSnackBarHorizontalPosition,
      verticalPosition: "bottom" as MatSnackBarVerticalPosition,
      panelClass: [panelClass],
    },
      data = {
        icon: icon,
        message: message,
      };
    this.snackBar.openFromComponent(SnackbarComponent, {
      ...defaultConf,
      data,
    });
  }
  getPointeurs() {
    return [
      37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44,
      44.5, 45, 45.5, 46, 46.5, 47, 47.5, 48, 48.5, 49,
    ];
  }
  getDiplomeSportif(id: number = null): any[] | any {
    const diplomes = [{ id: 0, label: "Licence CAF PRO" }, { id: 1, label: "AFC PRO" }, { id: 2, label: "Licence A CAF" }, { id: 3, label: "Licence B CAF" }, { id: 4, label: "Licence C CAF" }, { id: 5, label: "Licence D CAF" }, { id: 6, label: "UEFA PRO" }, { id: 7, label: "UEFA A" }, { id: 8, label: "UEFA B" }, { id: 9, label: "Certificat de Préparateur Physique A FRMF" }, { id: 10, label: "Certificat de Préparateur Physique B FRMF" }, { id: 11, label: "Diplôme de Préparateur Physique" }, { id: 12, label: "Dérogation Préparateur Physique (Provisoire)" }, { id: 13, label: "Certificat d'entraîneur des Gardiens de But A FRMF" }, { id: 14, label: "Certificat d'entraîneur des Gardiens de But B FRMF" }, { id: 15, label: "Dérogation d'entraîneur des GB (Provisoire)" }, { id: 16, label: "Diplôme d'entraîneur des GB" }, { id: 17, label: "Dérogation inscrit A CAF (Provisoire)" }, { id: 18, label: "Dérogation inscrit B CAF (Provisoire)" }, { id: 19, label: "Dérogation inscrit C CAF (Provisoire)" }, { id: 20, label: "Diplôme d'entraîneur Beach Soccer" }, { id: 21, label: "Diplôme d'entraîneur Futsal" }, { id: 22, label: "Directeur de formation des jeunes" }, { id: 23, label: "Directeur Directeur sportif" }, { id: 24, label: "Directeur technique" }, { id: 25, label: "Scout" }]
    return id ? diplomes.filter(d => d.id === id)[0] : diplomes;
  }


  calculateAverage(numbers: number[]) {
    if (numbers.length === 0) {
      return 0;
    }

    const sum = numbers.reduce((acc, current) => acc + current, 0);
    return (sum / numbers.length).toFixed(2);
  }
  convertToRgbaWithOpacity(color: string): string {
    // Check if the input color is in the rgba format (e.g., 'rgba(255, 99, 132, 0.5)')
    if (color.startsWith('rgba(')) {
      // Extract the color components and keep the same values, but change the opacity to 0.2
      const components = color.match(/\d+/g);
      if (components.length >= 4) {
        return `rgba(${components[0]}, ${components[1]}, ${components[2]}, 0.2)`;
      }
    } else if (color.startsWith('#')) {
      // If the input color is in hexadecimal format, convert it to rgba with opacity 0.2
      const hex = color.slice(1); // Remove the "#" character
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, 0.2)`;
    }

    // If the input color is not recognized, you can set it to the default 'rgba(0, 0, 0, 0.2)'
    return "rgba(0, 0, 0, 0.2)";
  }
  updatePlatformColor(varColor: string, newColor: string): void {
    this.document.documentElement.style.setProperty(varColor, newColor);
  }
  NoteHooper(note: number): NoteHooper {
    let arr = [
      {
        min: 1,
        max: 7.9,
        label: "Excellent",
        color: "#6AA84F",
      },
      {
        min: 8,
        max: 15.9,
        label: "Bon",
        color: "#e2d713",
      },
      {
        min: 16,
        max: 19.9,
        label: "Moyen",
        color: "#3D85C6",
      },
      {
        min: 20,
        max: 23.9,
        label: "Mauvias",
        color: "#F1C232",
      },
      {
        min: 24,
        max: 28,
        label: "Trés mauvais",
        color: "#CC0000",
      },
    ];
    return arr.filter((obj) => note >= obj.min && note <= obj.max).shift();
  }
  ClearLocalStorage(key: string[] = null): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      if (key == null) {
        localStorage.clear();
        observer.next(true);
      } else {
        key.forEach((k) => {
          localStorage.removeItem(k);
        });
        observer.next(true);
      }
      observer.complete();
    });
  }

  ConvertTextToLowerCaseAndConcat(text: string) {
    if (!text) return "";
    // Convert the text to lowercase
    const lowerCaseText = text.toLowerCase();

    // Replace spaces with underscores
    const replacedText = lowerCaseText.replace(/\s+/g, "_");

    return replacedText;
  }


  ExportExcel(excel: any, FILE_NAME: string, EXCEL_EXTENSION: string = '.xlsx') {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const keys = excel.map(e => e.TAB_NAME);

    const workbook: XLSX.WorkBook = {
      Sheets: excel.reduce((obj, item, index) => ({ ...obj, [item.TAB_NAME]: XLSX.utils.json_to_sheet(item.DATA) }), {}),
      SheetNames: keys
    };
    const data: Blob = new Blob([XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, FILE_NAME + EXCEL_EXTENSION);
  }

  capitalizeWords(string) {
    return string.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }
  toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  orderBy(array: Array<any>, type) {
    let new_array = [];
    new_array = array.sort(function (a, b) {
      if (type == 'player' || type == 'nom') {
        if ((a.nom.toLowerCase().trim()) + " " + (a.prenom.toLowerCase().trim()) < (b.nom.toLowerCase().trim()) + " " + (b.prenom.toLowerCase().trim())) { return -1; }
        if ((a.nom.toLowerCase().trim()) + " " + (a.prenom.toLowerCase().trim()) > (b.nom.toLowerCase().trim()) + " " + (b.prenom.toLowerCase().trim())) { return 1; }
      }
      return 0;
    });
    if (type == 'player') {
      new_array.forEach(e => {
        e.nom = e.nom.toUpperCase();
        e.prenom = e.prenom.trim();
        e.prenom = this.capitalizeWords(e.prenom).split('-').map(element => {
          return this.capitalizeWords(element);
        }).join('-');
      });
    }
    return new_array;
  }
  adversaire(id, equipes) {
    let equipe = equipes.find(element => id == id);
    if (equipe != null) {
      return equipe.slug != null && equipe.slug != '' ? equipe.slug : equipe.nom;
    } else {
      return id;
    }
  }
  equipeLogo(id, equipes) {
    return equipes.find(element => id == element.id)?.logo || null;
  }
  filterWithDate(array, date_now, playersDefault) {
    //  var result = arr.reduce((r, e) => (r.push(...e), r) , []);
    let valid = true;
    console.log(array)
    let arry = array.map(
      (item) => {
        let date_from = this.formatDate(new Date(item.date_debut), 'dateCheck').split('/');
        let date_to = this.formatDate(new Date(item.date_fin), 'dateCheck').split('/');
        let date_check = this.formatDate(new Date(date_now), 'dateCheck').split('/');
        let from = new Date(date_from[2], parseInt(date_from[1]) - 1, date_from[0]);
        let to = new Date(date_to[2], parseInt(date_to[1]) - 1, date_to[0]);
        let check = new Date(date_check[2], parseInt(date_check[1]) - 1, date_check[0]);
        if (
          check >= from && check <= to
        ) {
          valid = false;
          return item.joueur_ids.split(',');
        }
      }
    );
    arry = arry.filter(e => e != undefined);
    return valid ?
      playersDefault.map(e => '' + e.id)
      : arry.reduce((r, e) => (r.push(...e), r), []);
  }
  formatDate(date, type) {
    if (!date || date === 'null' || date === 'undefined') {
      return '';
    }

    const momentDate = moment(date);
    const formatMap = {
      dateTime: "DD_MM_YYYY HH_mm_ss",
      date: "DD-MM-YYYY",
      dateSql: "YYYY-MM-DD",
      dateCheck: "DD/MM/YYYY",
      dateview: "DD-MM-YYYY",
      timeview: "HH:mm",
      timeviewnumber: this.time_convert(+date),
      dateviewtime: "DD-MM-YYYY  HH:mm",
    };
    const format = formatMap[type];

    return format ? momentDate.format(format) : date;
  }

  timeStringToFloat(time: String) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return (hours + minutes / 60).toFixed(2);
  }

  time_convert(num): String {
    var sec_num = parseInt(num, 10); // don't forget the second param
    var hours: number | string = Math.floor(sec_num / 3600);
    var minutes: number | string = Math.floor((sec_num - hours * 3600) / 60);
    var seconds: number | string = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  }

  removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }

  playerNotificationData(players: Array<any>, playersIds: Array<number>) {
    return players
      .filter((player) => {
        if (player.token != null && player.device_type != null) {
          return playersIds.includes(player.id);
        }
      })
      .map((player) => {
        return {
          token: player.token,
          device_type: player.device_type,
          id: player.id,
        };
      });
  }
  toNumbers(arr: Array<string>): Array<number> {
    return arr.map(Number);
  }
  getSizeOfFile(file) {
    var _size = file.size;
    var exactSize = Math.round(_size * 100) / 100;
    return exactSize;
  }
  getActionsTypes() {
    return {
      but_marque: "Buts marqués",
      but_recu: "Buts encaissés",
      carton_rouge: "Carton rouge",
      carton_jaune: "Carton jaune",
      remplacement: "Remplacement",
      arret_decisif: "Arrêt décisif",
      fait_match: "Fait de match",
      won_duels: "Duels gagné",
      lost_duels: "Duels perdus",
      bloc_equipe: "Bloc équipe",
      animation_defensive: "Animation défensive",
      transition_defensive: "Transition défensive",
      attaque_place: "Attaque placée",
      attaque_rapide: "Attaque rapide",
      transition_offensive: "Transition Offensive",
      coup_franc_offensive: "Coup Franc Offensive",
      corner_offensive: "Corner Offensive",
      penaltie_offensive: "Penaltie Offensive",
      touche_offensive: "Touche Offensive",
      coup_franc_defensive: "Coup Franc défensive",
      corner_defensive: "Corner défensive",
      penaltie_defensive: "Penaltie défensive",
      touche_defensive: "Touche défensive",
      highlight: "Highlight",
      debrief_match: "Debrief du match",
      analyse_globale_adversaire: "Analyse globale de l'adversaire",
      analyse_phase_penalty: "Analyse de la phase des penalty",
    };
  }
  getLocalisation() {
    return [
      {
        value: "abdomen",
        label: "abdomen",
      },
      {
        value: "poitrine",
        label: "poitrine",
      },
      {
        value: "visage",
        label: "visage",
      },
      {
        value: "cheville gauche",
        label: "cheville gauche",
      },
      {
        value: "bras gauche",
        label: "bras gauche",
      },
      {
        value: "coude gauche",
        label: "coude gauche",
      },
      {
        value: "pied gauche",
        label: "pied gauche",
      },
      {
        value: "avant-bras gauche",
        label: "avant-bras gauche",
      },
      {
        value: "main gauche",
        label: "main gauche",
      },
      {
        value: "hanche gauche",
        label: "hanche gauche",
      },
      {
        value: "genou gauche",
        label: "genou gauche",
      },
      {
        value: "jambe gauche",
        label: "jambe gauche",
      },
      {
        value: "epaule gauche",
        label: "épaule gauche",
      },
      {
        value: "cuisse gauche",
        label: "cuisse gauche",
      },
      {
        value: "poignet gauche",
        label: "poignet gauche",
      },
      {
        value: "cou",
        label: "cou",
      },
      {
        value: "bassin",
        label: "bassin",
      },
      {
        value: "cheville droite",
        label: "cheville droite",
      },
      {
        value: "bras droite",
        label: "bras droite",
      },
      {
        value: "coude droite",
        label: "coude droite",
      },
      {
        value: "pied droite",
        label: "pied droite",
      },
      {
        value: "avant-bras droite",
        label: "avant-bras droite",
      },
      {
        value: "main droite",
        label: "main droite",
      },
      {
        value: "hanche droite",
        label: "hanche droite",
      },
      {
        value: "genou droite",
        label: "genou droite",
      },
      {
        value: "jambe droite",
        label: "jambe droite",
      },
      {
        value: "epaule droite",
        label: "épaule droite",
      },
      {
        value: "cuisse droite",
        label: "cuisse droite",
      },
      {
        value: "poignet droite",
        label: "poignet droite",
      },
      {
        value: "tete",
        label: "tete",
      },
      {
        value: "cou",
        label: "cou",
      },
      {
        value: "dos",
        label: "dos",
      },
      {
        value: "bas du dos",
        label: "bas du dos",
      },
      {
        value: "fessier",
        label: "fessier",
      },
      {
        value: "éqaule gauche derrière",
        label: "éqaule gauche derrière",
      },
      {
        value: "éqaule droite derrière",
        label: "éqaule droite derrière",
      },
      {
        value: "biceps gauche",
        label: "biceps gauche",
      },
      {
        value: "biceps droite",
        label: "biceps droite",
      },
      {
        value: "coude gauche derrière",
        label: "coude gauche derrière",
      },
      {
        value: "coude droite derrière",
        label: "coude droite derrière",
      },
      {
        value: "avant-bras gauche",
        label: "avant-bras gauche",
      },
      {
        value: "avant-bras droite",
        label: "avant-bras droite",
      },
      {
        value: "poignet gauche",
        label: "poignet gauche",
      },
      {
        value: "poignet droite",
        label: "poignet droite",
      },
      {
        value: "dos de la main gauche",
        label: "dos de la main gauche",
      },
      {
        value: "dos de la main droite",
        label: "dos de la main droite",
      },
      {
        value: "cuisse gauche derrière",
        label: "cuisse gauche derrière",
      },
      {
        value: "cuisse droite derrière",
        label: "cuisse droite derrière",
      },
      {
        value: "arrière du genou gauche",
        label: "arrière du genou gauche",
      },
      {
        value: "arrière du genou droite",
        label: "arrière du genou droite",
      },
      {
        value: "mollet gauche",
        label: "mollet gauche",
      },
      {
        value: "mollet droite",
        label: "mollet droite",
      },
      {
        value: "cheville gauche",
        label: "cheville gauche",
      },
      {
        value: "cheville droite",
        label: "cheville droite",
      },
      {
        value: "calcanéum gauche",
        label: "calcanéum gauche",
      },
      {
        value: "calcanéum droite",
        label: "calcanéum droite",
      },
      {
        value: "pied gauche",
        label: "pied gauche",
      },
      {
        value: "pied droite",
        label: "pied droite",
      },
    ];
  }
  getMoyensRecuperation() {
    return [
      {
        label: "Soins infirmiers",
        value: "Soins infirmiers",
      },
      {
        label: "Tecartherapie ",
        value: "Tecartherapie ",
      },
      {
        label: "Cryothérapie ",
        value: "Cryothérapie ",
      },
      {
        label: "US ",
        value: "US ",
      },
      {
        label: "Electro ",
        value: "Electro ",
      },
      {
        label: "Game Ready ",
        value: "Game Ready ",
      },
      {
        label: "Indiba ",
        value: "Indiba ",
      },
      {
        label: "Laser ",
        value: "Laser ",
      },
      {
        label: "Normatec ",
        value: "Normatec ",
      },
      {
        label: "Médication ",
        value: "Médication ",
      },
      {
        label: "Reathletisation ",
        value: "Reathletisation ",
      },
      {
        label: "Sauna/jacuzzi ",
        value: "Sauna/jacuzzi ",
      },
      {
        label: "Bain de glace",
        value: "Bain de glace",
      },
      {
        label: "CCE ",
        value: "CCE ",
      },
      {
        label: "Massage",
        value: "Massage",
      },
      {
        label: "Cataplasme ",
        value: "Cataplasme ",
      },
      {
        label: "Strapping ",
        value: "Strapping ",
      },
      {
        label: "Compression ",
        value: "Compression ",
      },
      {
        label: "Renforcement ",
        value: "Renforcement ",
      },
      {
        label: "Proprioception ",
        value: "Proprioception ",
      },
      {
        label: "Bain de contraste",
        value: "Bain de contraste",
      },
      {
        label: "Assouplissement ",
        value: "Assouplissement ",
      },
    ];
  }
  getTypeGps(type: string = "all"): string[] {
    switch (type) {
      case "entrainement":
        return ["entraînement", "entraînement individuel"];
      case "match":
        return ["match amical", "match officiel", "réathlétisation"];
      default:
        return [
          "entraînement",
          "entraînement individuel",
          "match amical",
          "match officiel",
          "réathlétisation",
        ];
    }
  }
  getTailles() {
    return [
      { id: "XS", label: "Extra Small" },
      { id: "S", label: "Small" },
      { id: "M", label: "Medium" },
      { id: "L", label: "Large" },
      { id: "XL", label: "Extra Large" },
      { id: "XXL", label: "Extra Extra Large" },
    ];
  }
  getColorSeance(
    category: string
  ): string | Array<{ label: string; color: string }> {
    const categoryColors = {
      "ENTRAINEMENT TEMPS EFFECTIF": "#ff33ff",
      REATHLETISATION: "#33ccff",
      "MATCH AMICAL": "#9900cc",
      "P.A.": "#33cccc",
      "MATCH OFFICIEL": "#6600cc",
      EXERCICE: "#336699",
      ENTRAÎNEMENT: "#ff33ff",
      "ENTRAINEMENT COMPLET": "#ff3366",
    };

    const color = categoryColors[category];
    if (color) {
      return color;
    } else {
      return Object.entries(categoryColors).map(([label, color]) => ({
        label,
        color,
      }));
    }
  }

  getDaysAbsence(value: number = null) {
    const array = [
      { value: 1, label: "Jour" },
      { value: 7, label: "Semaine" },
      { value: 30, label: "Mois" },
    ];
    return value == null
      ? array
      : array.find((e) => e.value == value)?.label || "Jour";
  }
  getStatusClasses(key: string = null) {
    return key == null
      ? {
        apte: "apte",
        inapte_reeducation: "inapte_reeducation",
        inapte_reathletisation: "inapte_reathletisation",
        inapte_maladie: "inapte_maladie",
      }
      : {
        apte: "Apte",
        inapte_reeducation: "Inapte Reeducation",
        inapte_reathletisation: "Inapte Réathlétisation",
        inapte_maladie: "Inapte Maladie",
      }[key];
  }
  getPostsAthletique() {
    return [
      {
        id: "A",
        label: "ATTAQUANT",
      },
      {
        id: "DC",
        label: "DÉFENSEUR CENTRAL",
      },
      {
        id: "DL",
        label: "DÉFENSEUR LATÉRAL",
      },
      {
        id: "JE",
        label: "Joueur Excentré",
      },
      {
        id: "MA",
        label: "MILIEU AXIAL",
      },
    ];
  }
  openFile(fileUrl: string, fileExtension: string): void {
    console.log(fileUrl, fileExtension);

    const newWindow = window.open();
    newWindow.document.body.style.display = "flex";
    newWindow.document.body.style.justifyContent = "center";
    newWindow.document.body.style.alignItems = "center";
    newWindow.document.body.style.margin = "0";
    newWindow.document.body.style.background = "#0e0e0e";
    newWindow.document.body.style.height = "100%";

    let fileElement;

    if (fileExtension === "image") {
      fileElement = newWindow.document.createElement("img");
      fileElement.src = fileUrl;
      fileElement.style.display = "block";
      fileElement.style.webkitUserSelect = "none";
      fileElement.style.margin = "auto";
      fileElement.style.backgroundColor = "hsl(0, 0%, 90%)";
      fileElement.style.transition = "background-color 300ms";
    } else if (["pdf", "video"].includes(fileExtension)) {
      fileElement = newWindow.document.createElement("a");
      fileElement.type = "application/pdf";
      fileElement.href = fileUrl;
      fileElement.click();
      return;
    } else {
      console.error("Unsupported file extension:", fileExtension);
      return;
    }

    newWindow.document.body.appendChild(fileElement);
  }
  getFileType(file: File | string): string {
    let extension = "";
    if (typeof file === "string") {
      extension = file.substr(file.lastIndexOf(".") + 1);
    } else {
      extension = file.name.substr(file.name.lastIndexOf(".") + 1);
    }
    if (extension.match(/^(jpg|jpeg|png|gif)$/)) {
      return "image";
    } else if (extension.match(/pdf$/)) {
      return "pdf";
    } else if (extension.match(/^(mp4|avi|wmv|mov|flv)$/)) {
      return "video";
    } else {
      return null;
    }
  }
  getPosts(id: string = null): any {
    let post = [
      { id: "G", label: "Gardien", label1: "GB" },
      { id: "D", label: "Défenseur" },
      { id: "AD", label: "Arrière droit" },
      { id: "DC", label: "Défenseur central" },
      { id: "AG", label: "Arrière gauche" },
      { id: "M", label: "Milieu" },
      { id: "MDR", label: "Milieu droit" },
      { id: "MA", label: "Milieu axial" },
      { id: "MG", label: "Milieu gauche" },
      { id: "MO", label: "Milieu offensif" },
      { id: "MDF", label: "Milieu défensif" },
      { id: "A", label: "Attaquant" },
      { id: "ALD", label: "Ailier droit" },
      { id: "AA", label: "Attaquant axial" },
      { id: "ALG", label: "Ailier gauche" },
    ];
    return id != null ? post.filter((p) => p.id == id) : post;
  }
  getMaxValue(arr: Array<any>, attribute: string) {
    var val = Math.max.apply(
      null,
      arr.map(function (params) {
        return params[attribute];
      })
    );
    return val == -Infinity ? "" : val;
  }
  generateRandomColor() {
    let maxVal = 0xffffff; // 16777215
    let randomNumber: any = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
  }
  getAge(dt1): number {
    dt1 = new Date(dt1);
    var dt2 = new Date();
    var diffYear = (dt2.getTime() - dt1.getTime()) / 1000;
    diffYear /= 60 * 60 * 24;
    return Math.abs(Math.round(diffYear / 365.25));
  }
  getLinkId(link: string): string {
    const youtubeIdRegex =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const matches = link.match(youtubeIdRegex);
    return (matches && matches[2].length === 11 ? matches[2] : "") ?? "";
  }

  SortByKey(arr: any[], index: { [key: string]: number }, key: string) {
    //. index = { new : 1 , old : 0}
    let new_arr = [];
    new_arr = arr.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
    new_arr[index.new][key] = +index.old + 1;
    new_arr[index.old][key] = +index.new + 1;
    return new_arr.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  }
  getTypeOfVideo(link: string): string {
    let type = "";
    if (link.indexOf("https://youtu.be/") != -1) {
      type = "youtube";
    } else if (link.indexOf("https://www.youtube.com/") != -1) {
      type = "youtube";
    } else if (link.indexOf("https://cnk.agency/") != -1) {
      type = "video";
    } else if (
      link.indexOf("https://upload.myteam.ma/uploads/myteambyfrmf/file-") != -1
    ) {
      type = "video";
    } else if (link.indexOf("https://") != -1) {
      type = "drive";
    } else {
      type = "";
    }
    return type;
  }
  getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  getRoleStaff(): any {
    return this.http.get(
      `${this.link}/${this.API}/configurationPanel/all-roles`
    );
  }

  getNationalities() {
    return this.http.get("assets/json/nationalities.json");
  }
  getCountrys() {
    return this.http.get("assets/json/countrys.json");
  }
  MatabolicPpower() {
    return [
      {
        label: "1s av mp (s)",
        code: "1s",
      },
      {
        label: "3s av mp (s)",
        code: "3s",
      },
      {
        label: "5s av mp (s)",
        code: "5s",
      },
      {
        label: "10s av mp (s)",
        code: "10s",
      },
      {
        label: "15s av mp (s)",
        code: "15s",
      },
      {
        label: "30s av mp (s)",
        code: "30s",
      },
      {
        label: "60s av mp (s)",
        code: "60s",
      },
      {
        label: "180s av mp (s)",
        code: "180s",
      },
      {
        label: "300s av mp (s)",
        code: "300s",
      },
      {
        label: "600s av mp (s)",
        code: "600s",
      },
      {
        label: "900s av mp (s)",
        code: "900s",
      },
      {
        label: "1800s av mp (s)",
        code: "1800s",
      },
      {
        label: "2700s av mp (s)",
        code: "2700s",
      },
    ];
  }

  AccelerationSpeed() {
    return [
      {
        label: "v0 (km/h)",
        code: "v0",
      },
      {
        label: "a0 (m/s2)",
        code: "a0",
      },
      {
        label: "tau",
        code: "tau",
      },
      {
        label: "10m time (s)",
        code: "10m",
      },
      {
        label: "20m time (s)",
        code: "20m",
      },
      {
        label: "30m time (s)",
        code: "30m",
      },
    ];
  }
  BaremeScouting(): any[] {
    return [
      {
        index: "0",
        color: "#d3e0f0",
        value: "0 - Pas Observé",
        label: "Pas Observé",
      },
      {
        index: "1",
        color: "#c14851",
        value: "1 - En Grande Difficultés",
        label: "En Grande Difficultés",
      },
      {
        index: "2",
        color: "#e94955",
        value: "2 - En Difficultés",
        label: "En Difficultés",
      },
      {
        index: "3",
        color: "#ebc351",
        value: "3 - En Moyen",
        label: "En Moyen",
      },
      { index: "4", color: "#ebec50", value: "4 - Bien", label: "Bien" },
      {
        index: "5",
        color: "#a4ce86",
        value: "5 - Excellent",
        label: "Excellent",
      },
    ];
  }
  typesOfTraining(): any[] {
    return [
      {
        id: 0,
        label: "Collectif",
        color: "black",
      },
      {
        id: 1,
        label: "Individuel",
        color: "#B02C3A",
      },
      {
        id: 2,
        label: "Spécifique",
        color: "#4166F5",
      },
    ];
  }
  Intensite(type = "Array"): any {
    return type == "Array"
      ? [
        {
          index: "0",
          color: "#d3e0f0",
          value: "0 - Aucun effort",
          label: "Aucun effort",
        },
        {
          index: "1",
          color: "#a4bac8",
          value: "1 - Très très facile",
          label: "Très très facile",
        },
        {
          index: "2",
          color: "#a4ce86",
          value: "2 - Très facile",
          label: "Très facile",
        },
        {
          index: "3",
          color: "#a4ce86",
          value: "3 - Facile",
          label: "Facile",
        },
        {
          index: "4",
          color: "#ebec50",
          value: "4 - Effort modéré",
          label: "Effort modéré",
        },
        {
          index: "5",
          color: "#ebec50",
          value: "5 - Moyen",
          label: "Moyen",
        },
        {
          index: "6",
          color: "#ebc351",
          value: "6 - Un peu dur",
          label: "Un peu dur",
        },
        { index: "7", color: "#ebc351", value: "7 - Dur", label: "Dur" },
        {
          index: "8",
          color: "#ebc351",
          value: "8 - Très dur",
          label: "Très dur",
        },
        {
          index: "9",
          color: "#e94955",
          value: "9 - Trés trés dur",
          label: "Trés trés dur",
        },
        {
          index: "10",
          color: "#c14851",
          value: "10 - Maximal",
          label: "Maximal",
        },
      ]
      : {
        "0": "0 - Aucun effort",
        "1": "1 - Très très facile",
        "2": "2 - Très facile",
        "3": "3 - Facile",
        "4": "4 - Effort modéré",
        "5": "5 - Moyen",
        "6": "6 - Un peu dur",
        "7": "7 - Dur",
        "8": "8 - Très dur",
        "9": "9 - Trés trés dur",
        "10": "10 - Maximal",
      };
  }

  getTypeChampionnat(type: String): String {
    switch (type) {
      case "européen":
        return "Européenne";
      case "regional":
        return "Regional";
      default:
        return "National";
    }
  }

  getNumberOfPlayerOnTerrain() {
    return [
      {
        "nbr": 11,
        "system_play": [
          {
            "id": "541",
            "label": "1-5-4-1",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_1",
              "player_7",
              "player_18",
              "player_16",
              "player_19",
              "player_20",
              "player_32"
            ]
          },
          {
            "id": "4312",
            "label": "1-4-3-1-2",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_15",
              "player_16",
              "player_19",
              "player_23",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "4141",
            "label": "1-4-1-4-1",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_16",
              "player_17",
              "player_19",
              "player_18",
              "player_20",
              "player_32"
            ]
          },
          {
            "id": "442p",
            "label": "1-4-4-2 ◼",
            "position": [
              "player_3",
              "player_5",
              "player_8",
              "player_14",
              "player_16",
              "player_19",
              "player_21",
              "player_25",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "532",
            "label": "1-5-3-2",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_1",
              "player_7",
              "player_15",
              "player_18",
              "player_20",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "352",
            "label": "1-3-5-2",
            "position": [
              "player_4",
              "player_3",
              "player_5",
              "player_16",
              "player_15",
              "player_19",
              "player_18",
              "player_20",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "4213",
            "label": "1-4-2-1-3",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_15",
              "player_10",
              "player_12",
              "player_26",
              "player_37",
              "player_39"
            ]
          },
          {
            "id": "343",
            "label": "1-3-4-3",
            "position": [
              "player_4",
              "player_3",
              "player_5",
              "player_16",
              "player_19",
              "player_18",
              "player_20",
              "player_26",
              "player_37",
              "player_39"
            ]
          },
          {
            "id": "424",
            "label": "1-4-2-4",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_16",
              "player_19",
              "player_35",
              "player_36",
              "player_26",
              "player_37"
            ]
          },
          {
            "id": "3412",
            "label": "1-3-4-1-2",
            "position": [
              "player_4",
              "player_3",
              "player_5",
              "player_16",
              "player_23",
              "player_19",
              "player_18",
              "player_20",
              "player_35",
              "player_36"
            ]
          },
          {
            "id": "3421",
            "label": "1-3-4-2-1",
            "position": [
              "player_4",
              "player__41",
              "player__42",
              "player__45",
              "player_23",
              "player__46",
              "player__43",
              "player__44",
              "player__47",
              "player__48"
            ]
          },
          {
            "id": "4411",
            "label": "1-4-4-1-1",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_16",
              "player_23",
              "player_19",
              "player_18",
              "player_20",
              "player_39"
            ]
          },
          {
            "id": "451",
            "label": "1-4-5-1",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_16",
              "player_15",
              "player_19",
              "player_18",
              "player_20",
              "player_39"
            ]
          },
          {
            "id": "3322",
            "label": "1-3-3-2-2",
            "position": [
              "player_4",
              "player_3",
              "player_5",
              "player_11",
              "player_10",
              "player_12",
              "player_40",
              "player_38",
              "player_35",
              "player_36"
            ]
          },
          {
            "id": "433",
            "label": "1-4-3-3",
            "position": [
              "player_3",
              "player_5",
              "player_8",
              "player_14",
              "player_15",
              "player_18",
              "player_20",
              "player_21",
              "player_25",
              "player_39"
            ]
          },
          {
            "id": "4321",
            "label": "1-4-3-2-1",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_15",
              "player_16",
              "player_19",
              "player_22",
              "player_24",
              "player_32"
            ]
          },
          {
            "id": "4132",
            "label": "1-4-1-3-2",
            "position": [
              "player_3",
              "player__11",
              "player_5",
              "player_1",
              "player_7",
              "player_15",
              "player_16",
              "player_19",
              "player_35",
              "player_36",
            ]
          },
          {
            "id": "442d",
            "label": "1-4-4-2 ♦",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_11",
              "player_18",
              "player_20",
              "player_23",
              "player_35",
              "player_36",
            ]
          },
          {
            "id": "523",
            "label": "1-5-2-3",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_1",
              "player_7",
              "player_16",
              "player_19",
              "player_26",
              "player_37",
              "player_32"
            ]
          },
          {
            "id": "4231",
            "label": "1-4-2-3-1",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_23",
              "player_16",
              "player_19",
              "player_21",
              "player_25",
              "player_39"
            ]
          },
          {
            "id": "442",
            "label": "1-4-4-2",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_16",
              "player_18",
              "player_20",
              "player_19",
              "player_35",
              "player_36"
            ]
          },
          {
            "id": "4123",
            "label": "1-4-1-2-3",
            "position": [
              "player_3",
              "player_5",
              "player_1",
              "player_7",
              "player_11",
              "player_16",
              "player_19",
              "player_26",
              "player_37",
              "player_32",
            ]
          }
        ]
      },
      {
        "nbr": 9,
        "system_play": [
          {
            "id": "323",
            "label": "1-3-2-3",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_16",
              "player_19",
              "player_30",
              "player_32",
              "player_34"
            ]
          },
          {
            "id": "314",
            "label": "1-3-1-4",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_15",
              "player_30",
              "player_31",
              "player_33",
              "player_34"
            ]
          },
          {
            "id": "431",
            "label": "1-4-3-1",
            "position": [
              "player_1",
              "player_3",
              "player_5",
              "player_7",
              "player_15",
              "player_18",
              "player_20",
              "player_32"
            ]
          },
          {
            "id": "2321",
            "label": "1-2-3-2-1",
            "position": [
              "player_3",
              "player_5",
              "player_16",
              "player_15",
              "player_19",
              "player_21",
              "player_25",
              "player_32"
            ]
          },
          {
            "id": "242",
            "label": "1-2-4-2",
            "position": [
              "player_3",
              "player_5",
              "player_18",
              "player_16",
              "player_19",
              "player_20",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "332",
            "label": "1-3-3-2",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_15",
              "player_18",
              "player_20",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "422",
            "label": "1-4-2-2",
            "position": [
              "player_1",
              "player_3",
              "player_5",
              "player_7",
              "player_16",
              "player_19",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "341",
            "label": "1-3-4-1",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_18",
              "player_16",
              "player_19",
              "player_20",
              "player_32"
            ]
          }
        ]
      },
      {
        "nbr": 8,
        "system_play": [
          {
            "id": "1312",
            "label": "1-1-3-1-2",
            "position": [
              "player_4",
              "player_16",
              "player_15",
              "player_19",
              "player_23",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "412",
            "label": "1-4-1-2",
            "position": [
              "player_1",
              "player_3",
              "player_5",
              "player_7",
              "player_15",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "421",
            "label": "1-4-2-1",
            "position": [
              "player_1",
              "player_3",
              "player_5",
              "player_7",
              "player_16",
              "player_19",
              "player_32"
            ]
          },
          {
            "id": "331",
            "label": "1-3-3-1",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_15",
              "player_18",
              "player_20",
              "player_32"
            ]
          },
          {
            "id": "403",
            "label": "1-4-0-3",
            "position": [
              "player_1",
              "player_3",
              "player_5",
              "player_7",
              "player_21",
              "player_23",
              "player_25"
            ]
          },
          {
            "id": "2311",
            "label": "1-2-3-1-1",
            "position": [
              "player_3",
              "player_5",
              "player_16",
              "player_15",
              "player_19",
              "player_23",
              "player_39"
            ]
          },
          {
            "id": "1411",
            "label": "1-1-4-1-1",
            "position": [
              "player_4",
              "player_16",
              "player_18",
              "player_19",
              "player_20",
              "player_23",
              "player_39"
            ]
          },
          {
            "id": "223",
            "label": "1-2-2-3",
            "position": [
              "player_3",
              "player_5",
              "player_16",
              "player_19",
              "player_30",
              "player_32",
              "player_34"
            ]
          },
          {
            "id": "322",
            "label": "1-3-2-2",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_16",
              "player_19",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "1321",
            "label": "1-1-3-2-1",
            "position": [
              "player_4",
              "player_15",
              "player_16",
              "player_19",
              "player_22",
              "player_24",
              "player_32"
            ]
          },
          {
            "id": "142",
            "label": "1-1-4-2",
            "position": [
              "player_4",
              "player_16",
              "player_18",
              "player_19",
              "player_20",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "313",
            "label": "1-3-1-3",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_15",
              "player_30",
              "player_32",
              "player_34"
            ]
          },
          {
            "id": "214",
            "label": "1-2-1-4",
            "position": [
              "player_3",
              "player_5",
              "player_15",
              "player_30",
              "player_31",
              "player_33",
              "player_34"
            ]
          },
          {
            "id": "241",
            "label": "1-2-4-1",
            "position": [
              "player_3",
              "player_5",
              "player_16",
              "player_18",
              "player_19",
              "player_20",
              "player_32"
            ]
          },
          {
            "id": "232",
            "label": "1-2-3-2",
            "position": [
              "player_3",
              "player_5",
              "player_15",
              "player_18",
              "player_20",
              "player_31",
              "player_33"
            ]
          }
        ]
      },
      {
        "nbr": 7,
        "system_play": [
          {
            "id": "321",
            "label": "1-3-2-1",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_16",
              "player_19",
              "player_32"
            ]
          },
          {
            "id": "213",
            "label": "1-2-1-3",
            "position": [
              "player_3",
              "player_5",
              "player_15",
              "player_30",
              "player_32",
              "player_34"
            ]
          },
          {
            "id": "231",
            "label": "1-2-3-1",
            "position": [
              "player_3",
              "player_5",
              "player_16",
              "player_15",
              "player_19",
              "player_32"
            ]
          },
          {
            "id": "312",
            "label": "1-3-1-2",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_15",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "501",
            "label": "1-5-0-1",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_8",
              "player_14",
              "player_23"
            ]
          },
          {
            "id": "402",
            "label": "1-4-0-2",
            "position": [
              "player_1",
              "player_3",
              "player_5",
              "player_7",
              "player_31",
              "player_33"
            ]
          },
          {
            "id": "303",
            "label": "1-3-0-3",
            "position": [
              "player_3",
              "player_4",
              "player_5",
              "player_30",
              "player_32",
              "player_34"
            ]
          }
        ]
      }
    ]
  }
  getLinks(): Links[] {
    return [
      {
        translate: "HEADER.HOME",
        key: "home",
        routerLink: "/dashboard",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: true}",
        icon: "fas fa-home"
      },
      {
        translate: "HEADER.CALENDAR",
        key: "calendrier",
        routerLink: "calendrier",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-calendar-day"
      },
      {
        translate: "HEADER.MATCH",
        key: "match",
        routerLink: "match/calendar",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "far fa-futbol"
      },
      {
        translate: "HEADER.TRAINING",
        key: "entrainement",
        routerLink: "entrainement/myTraining",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-clipboard"
      },
      {
        translate: "DataHub",
        key: "databub",
        routerLink: "datahub/ranking",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-chart-pie"
      },

      // {
      //     translate: "HEADER.CONTROLLE",
      //     key: "controlle-panel",
      //     routerLink: "controlle-panel",
      //     routerLinkActive: "activatedMenuItem",
      //     routerLinkActiveOptions: "{exact: false}",
      //     icon: "far fa-futbol"
      // },

      {
        translate: "Calendrier DTN",
        key: "calendrier-dtn",
        routerLink: "calendrier-dtn/calendrier",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-tasks",
      },
      {
        translate: "Coffre Fort",
        key: "coffre-fort",
        routerLink: "/coffre-fort/list",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-archive",
      },
      {
        translate: "CTR Data",
        key: "ctr",
        routerLink: "ctr-reporting/dashboard",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "far fa-futbol",
      },
      {
        translate: "HEADER.ADMINISTRATIVE",
        key: "administration",
        routerLink: "administration/listplayers",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-users-cog",
      },
      {
        translate: "HEADER.ANALYSEVIDEO",
        key: "matchs-events",
        routerLink: "matchs-events",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-video",
      },
      {
        translate: "HEADER.ATHLETE",
        key: "athlete",
        routerLink: "athlete/list-player",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-sort-amount-down",
      },
      {
        translate: "HEADER.DATA_EXPORT",
        key: "data-export",
        routerLink: "data-export/list",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-database",
      },
      {
        translate: "HEADER.EFFECTIVE",
        key: "effectif",
        routerLink: "effectif/myTeam",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-shield-alt",
      },
      {
        translate: "HEADER.EXERCISE_SHEET",
        key: "fichiers-exercice",
        routerLink: "exercise/all",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-clipboard",
      },
      {
        translate: "HEADER.MAIL",
        key: "mail",
        routerLink: "mail/sendMail",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-comments",
      },
      {
        translate: "HEADER.MEDICAL",
        key: "medical",
        routerLink: "medical/stats",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-file-medical-alt",
      },
      {
        translate: "HEADER.PARAMETRES",
        key: "configuration-panel",
        routerLink: "configuration-panel/injuries",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-cogs",
      },
      {
        translate: "HEADER.PHYSICAL",
        key: "physique",
        routerLink: "physique",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-running",
      },
      {
        translate: "HEADER.STAGES",
        key: "hubspot",
        routerLink: "stages/list",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fab fa-hubspot",
      },
      {
        translate: "HEADER.STATS",
        key: "stats",
        routerLink: "stats",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-chart-bar",
      },
      {
        translate: "HEADER.WORKLOAD",
        key: "performance",
        routerLink: "performance",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-chart-bar",
      },
      {
        translate: "Ligue Men",
        key: "ligue-m",
        routerLink: "/scouting-ligue-m/men/CmRSQLlOC39V2",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-binoculars",
      },
      {
        translate: "Ligue Women",
        key: "ligue-w",
        routerLink: "/scouting-ligue-w/women/CmRSQLlOC39V2",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-binoculars",
      },
      {
        translate: "Media Center",
        key: "media-center",
        routerLink: "media-center",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-play-circle",
      },
      {
        translate: "Prevention",
        key: "prevention",
        routerLink: "prevention/list-prevention",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-qrcode",
      },
      {
        translate: "Scouting Men",
        key: "scouting-m",
        routerLink: "/scouting-m/men/A19L5vu8lguQ2",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-binoculars",
      },
      {
        translate: "Scouting Women",
        key: "scouting-w",
        routerLink: "/scouting-w/women/A19L5vu8lguQ2",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-binoculars",
      },
      {
        translate: "Transfom Staff",
        key: "staff",
        routerLink: "staff/all",
        routerLinkActive: "activatedMenuItem",
        routerLinkActiveOptions: "{exact: false}",
        icon: "fas fa-random",
      },

      // {
      //     translate: "HEADER.CENTER_LIFE",
      //     key: "vie-centre",
      //     routerLink: "vie-centre/centre-players",
      //     routerLinkActive: "activatedMenuItem",
      //     routerLinkActiveOptions: "{exact: false}",
      //     icon: "fas fa-school"
      // }
    ];
  }

  DetectIsMobile(): boolean {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const isScreen = [
      screenWidth === 1280 && screenHeight === 800,
      screenHeight === 1280 && screenWidth === 800,
    ];

    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem) || isScreen.includes(true);
    });
  }

  getBanques() {
    return [
      {
        id: 0,
        name: "ARAB BANK MAROC",
        img: "assets/images/Banques/arab-bank.png",
      },
      {
        id: 1,
        name: "ATTIJARIWAFA BANK",
        img: "assets/images/Banques/atw.png",
      },
      {
        id: 2,
        name: "AL BARID BANK",
        img: "assets/images/Banques/albarid-bank.png",
      },
      { id: 3, name: "BANK ASSAFA", img: "assets/images/Banques/assafa.png" },
      {
        id: 4,
        name: "BANQUE CENTRALE POPULAIRE",
        img: "assets/images/Banques/bcp_logo.png",
      },
      {
        id: 5,
        name: "BANK OF AFRICA",
        img: "assets/images/Banques/boa_nouveau_logo.png",
      },
      {
        id: 6,
        name: "BANQUE MAROCAINE POUR LE COMMERCE ET L’INDUSTRIE",
        img: "assets/images/Banques/bmci.png",
      },
      {
        id: 7,
        name: "CAIXA BANK S. A",
        img: "assets/images/Banques/caixabank.png",
      },
      {
        id: 8,
        name: "CREDIT AGRICOLE DU MAROCCREDIT AGRICOLE DU MAROC",
        img: "assets/images/Banques/ca.png",
      },
      { id: 9, name: "CFG BANK", img: "assets/images/Banques/cfg.png" },
      {
        id: 10,
        name: "CDG CAPITAL",
        img: "assets/images/Banques/cdg_capital_logo.png",
      },
      {
        id: 11,
        name: "CREDIT IMMOBILIER ET HOTELIER",
        img: "assets/images/Banques/cih.png",
      },
      {
        id: 12,
        name: "CITIBANK MAGHREB",
        img: "assets/images/Banques/citi-bank.png",
      },
      { id: 13, name: "CREDIT DU MAROC", img: "assets/images/Banques/cdm.png" },
      { id: 14, name: "SABADEL", img: "assets/images/Banques/sabadell.png" },
      {
        id: 15,
        name: "SOCIETE GENERALE MAROCAINE DE BANQUES",
        img: "assets/images/Banques/sgma_nouveau_logo.png",
      },
      {
        id: 16,
        name: "UNION MAROCAINE DES BANQUES",
        img: "assets/images/Banques/umb.png",
      },
      {
        id: 17,
        name: "BMCE BANK",
        img: "assets/images/Banques/BMCE_Bank.jpeg",
      },
    ];
  }
  generateRandomId() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      randomId += chars.charAt(randomIndex);
    }

    return randomId;
  }
}
export const MY_CUSTOM_FORMATS = {
  fullPickerInput: "DD/MM/YYYY HH:mm",
  parseInput: "DD/MM/YYYY HH:mm",
  datePickerInput: "DD/MM/YYYY HH:mm",
  timePickerInput: "LT",
  monthYearLabel: "MMM YYYY",
  dateA11yLabel: "LL",
  monthYearA11yLabel: "MMMM YYYY",
};
export interface Links {
  translate: string;
  key: string;
  routerLink: string;
  routerLinkActive: string;
  routerLinkActiveOptions: string;
  icon: string;
}
