import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { RESPONCE_ClubJSON } from 'src/app/components/scouting/interface/Clubs';
// import { PlayerList } from 'src/app/components/adminstration/list-players/models/PlayersList';

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  File;
  players;
  players_pret;
  player;
  countrys;
  testsPhysique;
  titulaire;
  stage;
  comments;
  playerVideos;
  rooms;
  playersTerminated;
  trainings;
  injuries;
  documents;
  playerSpending;
  updatedPlayers = new Subject();
  updatedPlayerDatabase = new Subject();
  updatedPlayersTerminated = new Subject();
  updatedPlayersPret = new Subject();
  updatedPlayer = new Subject();
  updatedComments = new Subject();
  updatedInjuries = new Subject();
  updatedTrainings = new Subject();
  updatedTrainingsDatabase = new Subject();
  updatedTestsPhysique = new Subject();
  updatedPlayerVideos = new Subject();
  updatedDocuments = new Subject();
  updatedRooms = new Subject();
  updatedTitulaire = new Subject();
  updatedButMarqueZone = new Subject();
  updatedCartonJauneZone = new Subject();
  updatedCartonRougeZone = new Subject();
  updatedPasseDecisiveZone = new Subject();
  link;
  API;
  endpoint = "joueur";
  courbatures;
  vitesse;
  aerobie;
  souplesse;
  force;
  techniques;
  tactiques;
  athletiques;
  scolaires;
  mentales;
  stages;
  infirmerieMedicale;
  sorties;
  updatedTechniques = new Subject();
  updatedTactiques = new Subject();
  updatedAthletiques = new Subject();
  updatedScolaires = new Subject();
  updatedMentales = new Subject();
  updatedVitesse = new Subject();
  updatedAerobie = new Subject();
  updatedSouplesse = new Subject();
  updatedReathletisation = new Subject();
  updatedForce = new Subject();
  updatedTopPasseur = new Subject();
  updatedSorties = new Subject();
  updatedInjuriesTypes = new Subject();
  updatedPersonnelDoctors = new Subject();
  updatedPlayerMedicines = new Subject();
  updatedMedicalNotes = new Subject();
  updatedPlayerSpending = new Subject();
  updatedAppointements = new Subject();
  updatedPhysiqueTests = new Subject();
  updatedGpsFields = new Subject();
  updatedPlayers_spending = new Subject();
  updatedPlayerGpsFields = new Subject();
  updatedStageOne = new Subject();
  updatedPhysiqueChildTests = new Subject();
  updatedDatabasePlayerPhysiqueTests = new Subject();
  updatedPlayerPhysiqueTests = new Subject();
  updatedPlayerVaccins = new Subject();
  updatedCountry = new Subject();
  updatedCourbatures = new Subject();
  updatedStage = new Subject();
  updatedGammes = new Subject();
  updatedInfirmerieMedicale = new Subject();
  updatedPharmacieMedicaments = new Subject();
  updatedContracts = new Subject();
  updatedTraitement = new Subject();
  constructor(private http: HttpClient, private router: Router) {
    this.link = environment.link;
    this.API = environment.API;
  }
  getUpdatedTraitementListner() {
    return this.updatedTraitement.asObservable();
  }
  getUpdatedReathletisation() {
    return this.updatedReathletisation.asObservable();
  }
  getUpdatedCourbatures() {
    return this.updatedCourbatures.asObservable();
  }
  getUpdatedPlayers_spending() {
    return this.updatedPlayers_spending.asObservable();
  }
  getUpdatedStage() {
    return this.updatedStage.asObservable();
  }
  getUpdatedPharmacieMedicamentsListner() {
    return this.updatedPharmacieMedicaments.asObservable();
  }
  getUpdatedContractsListner() {
    return this.updatedContracts.asObservable();
  }
  getUpdatedStageOne() {
    return this.updatedStageOne.asObservable();
  }
  getUpdatedGammesListner() {
    return this.updatedGammes.asObservable();
  }
  getUpdatedTestsPhysique() {
    return this.updatedTestsPhysique.asObservable();
  }
  getUpdatedPlayerVaccinsListner() {
    return this.updatedPlayerVaccins.asObservable();
  }
  getUpdatedDatabasePlayerPhysiqueTestsListner() {
    return this.updatedDatabasePlayerPhysiqueTests.asObservable();
  }
  getUpdatedPhysiqueTestsListner() {
    return this.updatedPhysiqueTests.asObservable();
  }
  getUpdatedGpsFieldsListner() {
    return this.updatedGpsFields.asObservable();
  }
  getUpdatedPlayerGpsFieldsListner() {
    return this.updatedPlayerGpsFields.asObservable();
  }
  getUpdatedPhysiqueChildTestsListner() {
    return this.updatedPhysiqueChildTests.asObservable();
  }
  getUpdatedInjuriesTypesListner() {
    return this.updatedInjuriesTypes.asObservable();
  }
  getUpdatedAppointementListner() {
    return this.updatedAppointements.asObservable();
  }
  getUpdatedPersonnelDoctorsListner() {
    return this.updatedPersonnelDoctors.asObservable();
  }
  getUpdatedPlayerMedicinesListner() {
    return this.updatedPlayerMedicines.asObservable();
  }
  getUpdatedMedicalNotesListner() {
    return this.updatedMedicalNotes.asObservable();
  }
  getUpdatedPlayersListner() {
    return this.updatedPlayers.asObservable();
  }
  getUpdatedPlayersListnerTerminated() {
    return this.updatedPlayersTerminated.asObservable();
  }
  getUpdatedPlayersPret() {
    return this.updatedPlayersPret.asObservable();
  }

  getUpdatedPlayerListner() {
    return this.updatedPlayer.asObservable();
  }
  getUpdatedPlayerDatabaseListner() {
    return this.updatedPlayerDatabase.asObservable();
  }
  getUpdatedCommentsListner() {
    return this.updatedComments.asObservable();
  }
  getUpdatedInjuriesListner() {
    return this.updatedInjuries.asObservable();
  }
  getUpdatedTrainingsListner() {
    return this.updatedTrainings.asObservable();
  }
  getUpdatedTrainingsDatabaseListner() {
    return this.updatedTrainingsDatabase.asObservable();
  }
  getUpdatedDocumentsListner() {
    return this.updatedDocuments.asObservable();
  }
  getUpdatedRoomsListner() {
    return this.updatedRooms.asObservable();
  }
  getUpdatedTitulaireListner() {
    return this.updatedTitulaire.asObservable();
  }
  getUpdatedVitesseListner() {
    return this.updatedVitesse.asObservable();
  }
  getUpdatedAerobieListner() {
    return this.updatedAerobie.asObservable();
  }
  getCountrys() {
    return this.updatedCountry.asObservable();
  }
  getUpdatedButMarqueZone() {
    return this.updatedButMarqueZone.asObservable();
  }
  getUpdatedCartonRougeZone() {
    return this.updatedCartonRougeZone.asObservable();
  }
  getUpdatedCartonJauneZone() {
    return this.updatedCartonJauneZone.asObservable();
  }
  getUpdatedPlayerSpending() {
    return this.updatedPlayerSpending.asObservable();
  }
  getUpdatedPasseDecisiveZone() {
    return this.updatedPasseDecisiveZone.asObservable();
  }
  getUpdatedPlayerVideos() {
    return this.updatedPlayerVideos.asObservable();
  }
  getUpdatedForceListner() {
    return this.updatedForce.asObservable();
  }
  getUpdatedSouplesseListner() {
    return this.updatedSouplesse.asObservable();
  }
  getUpdatedAthletiquesListner() {
    return this.updatedAthletiques.asObservable();
  }
  getUpdatedTactiquesListner() {
    return this.updatedTactiques.asObservable();
  }
  getUpdatedTechniquesListner() {
    return this.updatedTechniques.asObservable();
  }
  getUpdatedScolairesListner() {
    return this.updatedScolaires.asObservable();
  }
  getUpdatedMentalesListner() {
    return this.updatedMentales.asObservable();
  }
  getUpdatedTopPasseurListner() {
    return this.updatedTopPasseur.asObservable();
  }
  getUpdatedSortiesListner() {
    return this.updatedSorties.asObservable();
  }
  getUpdatedInfirmerieMedicale() {
    return this.updatedInfirmerieMedicale.asObservable();
  }

  addFileTestPhysique(data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addFileTestPhysique`,
      { data: JSON.stringify(data) }
    );
  }
  getDocuments(id, type) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/document/${id}/${type}`)
      .subscribe((result) => {
        this.documents = result;
        this.updatedDocuments.next(result);
      });
  }
  deleteDocument(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/document/${id}`
    );
  }
  addDocument(info, id, type, file) {
    let data = new FormData();
    data.append("name", info.name);
    data.append("date", info.date);
    data.append("comment", info.comment);
    data.append("type", type);
    data.append("reason", info.reason);
    data.append("file", file);
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/document/${id}`,
      data
    );
  }

  getPlayers() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/all`)
      .subscribe((result) => {
        this.players = result;
        this.updatedPlayers.next(result);
      });
  }
  getPlayersTerminated() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/all-terminated`)
      .subscribe((result) => {
        this.playersTerminated = result;
        this.updatedPlayersTerminated.next(result);
      });
  }
  getPlayersPret() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/all-preter`)
      .subscribe((result) => {
        this.players_pret = result;
        this.updatedPlayersPret.next(result);
      });
  }
  getCourbatures(player_id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/getblessureplayer/` +
        player_id
      )
      .subscribe((result) => {
        this.courbatures = result;
        this.updatedCourbatures.next(result);
      });
  }
  getPlayerVideos(id) {
    this.http
      .get(`${this.link}/${this.API}/match/match_actionsplayer/${id}`)
      .subscribe((result) => {
        this.playerVideos = result;
        this.updatedPlayerVideos.next(result);
      });
  }
  getPlayerSpending(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/salarysign/one/${id}`)
      .subscribe((result) => {
        this.playerSpending = result;
        this.updatedPlayerSpending.next(result);
      });
  }
  uploadFile(file) {
    let data = new FormData();
    data.append("file", file);
    const req = new HttpRequest(
      "POST",
      "https://cnk.agency/myteamFilesApi/api/upload",
      data,
      {
        reportProgress: true,
        responseType: "json",
      }
    );

    return this.http.request(req);
  }

  getStages() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/playerstage/all`)
      .subscribe((result) => {
        this.stages = result;
        this.updatedStage.next(result);
      });
  }
  getStage(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/playerstage/${id}`)
      .subscribe((result) => {
        this.stage = result;
        this.updatedStageOne.next(result);
      });
  }
  addStage(requeste, notify = "EMAIL") {
    let stage = {
      titre: requeste.titre,
      joueurs: "" + requeste.joueurs,
      date_fin: requeste.date_fin,
      date_debut: requeste.date_debut,
    };
    return this.http
      .post(
        `${this.link}/${this.API}/joueur/playerstage/add?notify=${notify}`,
        stage
      )
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigate(["/effectif/stage"]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteStage(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/playerstage/${id}`
    );
  }
  updateStage(requeste) {
    let stage = {
      id: requeste.id,
      titre: requeste.titre,
      joueurs: "" + requeste.joueurs,
      date_fin: requeste.date_fin,
      date_debut: requeste.date_debut,
    };
    return this.http
      .post(
        `${this.link}/${this.API}/${this.endpoint}/playerstage/update`,
        stage
      )
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigate(["/effectif/stage"]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  addPlayerVideos(id, data) {
    let player = new FormData();
    player.append("type", data.type);
    player.append("link", data.link);
    player.append("rapport", data.rapport);
    player.append("title", data.title);
    player.append("match_id", data.match_id);
    player.append("time", null);
    player.append("device_type", data.device_type);
    player.append("token", data.token);
    player.append("email", data.email);
    player.append("joueur", id);
    player.append("joueur_id", id);
    player.append("x_axes", null);
    player.append("y_axes", null);
    return this.http.post(
      `${this.link}/${this.API}/match/match_actionsplayer/${id}`,
      player
    );
    // return this.http.post(`${this.link}/${this.API}/match/match_actions/'+id,player);
  }
  deletePlayerVideos(id) {
    return this.http.delete(
      `${this.link}/${this.API}/match/match_actionsplayer/${id}`
    );
  }
  editPlayerVideos(joueur_id, id, data) {
    data["joueur"] = +joueur_id;
    // let player = new FormData();
    // player.append("type", data.type);
    // player.append("link", data.link);
    // player.append("rapport", data.rapport);
    // player.append("title", data.title);
    // player.append("joueur",joueur_id);
    // player.append("x_axes", null);
    // player.append("y_axes", null);
    return this.http.post(
      `${this.link}/${this.API}/match/update_match_actionsplayer/${id}`,
      data
    );
  }

  editPlayerSpending(data, file) {
    //    const spending = {
    //     signature : data.signature,
    //     mode : data.mode,
    //     date : data.date,
    //     img : file != null ? '' : data.fichier ,
    //     images : file ,
    //     montant : data.montant,
    //     id:data.id,
    //     joueur_id:data.joueur_id,
    //   }

    let dataToSend = new FormData();
    dataToSend.append("img", file != null ? "" : data.fichier);
    dataToSend.append("image", file ?? null);
    dataToSend.append("montant", data.montant);
    dataToSend.append("mode", data.mode);
    dataToSend.append("date", data.date);
    dataToSend.append("signature", data.signature);
    dataToSend.append("joueur_id", data.joueur_id);
    dataToSend.append("id", data.id);
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/salarysignUpdate/` +
      data.joueur_id,
      dataToSend
    );
  }
  addPlayerSpending(data, file) {
    //     let spending = {
    //      signature : data.signature,
    //      mode : data.mode,
    //      date : data.date,
    //      // img : file != null ? file : '' ,
    //      montant : data.montant,
    //      id:data.id,
    //      joueur_id:data.joueur_id,
    //    }
    let dataToSend = new FormData();
    dataToSend.append("img", file != null ? "" : data.fichier);
    dataToSend.append("image", file);
    dataToSend.append("montant", data.montant);
    dataToSend.append("mode", data.mode);
    dataToSend.append("date", data.date);
    dataToSend.append("signature", "" + data.signature);
    dataToSend.append("joueur_id", data.joueur_id);
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/salarysign/` + data.joueur_id,
      dataToSend
    );
  }

  getGlobalPlayersStats() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/global-stats`)
      .subscribe((result) => {
        this.players = result;
        this.updatedPlayers.next(result);
      });
  }
  getTitulaires() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/players-in-out`)
      .subscribe((result) => {
        this.titulaire = result;
        this.updatedTitulaire.next(result);
      });
  }
  playersWithSalaries() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/playersWithSalariess`)
      .subscribe((result) => {
        this.players = result;
        this.updatedPlayers.next(result);
      });
  }
  players_contract() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/players_contract`)
      .subscribe((result) => {
        this.updatedContracts.next(result);
      });
  }
  players_spending(player_id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/salarysign/` + player_id)
      .subscribe((result) => {
        this.updatedPlayers_spending.next(result);
      });
  }
  getFilteredPlayersStats(competition, matchs) {
    this.http
      .post(`${this.link}/${this.API}/${this.endpoint}/filteredPlayersStats`, {
        competition: competition,
        matchs: matchs,
      })
      .subscribe((result) => {
        this.players = result;
        this.updatedPlayers.next(result);
      });
  }
  getCentrePlayers() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/all-centre-players`)
      .subscribe((result) => {
        this.players = result;
        this.updatedPlayers.next(result);
      });
  }
  getInfirmerieMedicale() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/infirmerieMedicale`)
      .subscribe((result) => {
        this.infirmerieMedicale = result;
        this.updatedInfirmerieMedicale.next(result);
      });
  }
  getPlayersWithRooms() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/playersWithRooms`)
      .subscribe((result) => {
        this.players = result;
        this.updatedPlayers.next(result);
      });
  }
  getCountry() {
    this.http.get(`https://restcountries.com/v3.1/all`).subscribe((result) => {
      this.countrys = result;
      this.updatedCountry.next(result);
    });
  }
  sendPlayer(data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/multijoueurs/add`,
      { players: data }
    );
  }
  getPlayer(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/one/${id}`)
      .pipe(
        map((player: any) => {
          return player.map((p: any) => {
            if (p.cni_expiration != "" && p.cni_expiration != null) {
              const cniexpiration = new Date(p.cni_expiration);
              const daycni =
                cniexpiration.getDate() < 10
                  ? "0" + cniexpiration.getDate()
                  : cniexpiration.getDate();
              const monthcni =
                cniexpiration.getMonth() + 1 < 10
                  ? "0" + (cniexpiration.getMonth() + 1)
                  : cniexpiration.getMonth() + 1;
              const yearcni = cniexpiration.getFullYear();
              p.cni_expiration = yearcni + "-" + monthcni + "-" + daycni;
            }
            if (p.passport_expiration != "" && p.passport_expiration != null) {
              const passportexpiration = new Date(p.passport_expiration);
              const daypassport =
                passportexpiration.getDate() < 10
                  ? "0" + passportexpiration.getDate()
                  : passportexpiration.getDate();
              const monthpassport =
                passportexpiration.getMonth() + 1 < 10
                  ? "0" + (passportexpiration.getMonth() + 1)
                  : passportexpiration.getMonth() + 1;
              const yearpassport = passportexpiration.getFullYear();
              p.passport_expiration =
                yearpassport + "-" + monthpassport + "-" + daypassport;
            }
            return p;
          });
        })
      )
      .subscribe((result) => {
        this.player = result[0];
        this.updatedPlayer.next(result[0]);
      });
  }
  getPlayerDatadase(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/database-one/${id}`)
      .pipe(
        map((player: any) => {
          return player.map((p: any) => {
            if (p.cni_expiration != "" && p.cni_expiration != null) {
              const cniexpiration = new Date(p.cni_expiration);
              const daycni =
                cniexpiration.getDate() < 10
                  ? "0" + cniexpiration.getDate()
                  : cniexpiration.getDate();
              const monthcni =
                cniexpiration.getMonth() + 1 < 10
                  ? "0" + (cniexpiration.getMonth() + 1)
                  : cniexpiration.getMonth() + 1;
              const yearcni = cniexpiration.getFullYear();
              p.cni_expiration = yearcni + "-" + monthcni + "-" + daycni;
            }
            if (p.passport_expiration != "" && p.passport_expiration != null) {
              const passportexpiration = new Date(p.passport_expiration);
              const daypassport =
                passportexpiration.getDate() < 10
                  ? "0" + passportexpiration.getDate()
                  : passportexpiration.getDate();
              const monthpassport =
                passportexpiration.getMonth() + 1 < 10
                  ? "0" + (passportexpiration.getMonth() + 1)
                  : passportexpiration.getMonth() + 1;
              const yearpassport = passportexpiration.getFullYear();
              p.passport_expiration =
                yearpassport + "-" + monthpassport + "-" + daypassport;
            }
            return p;
          });
        })
      )
      .subscribe((result) => {
        this.player = result[0];
        this.updatedPlayerDatabase.next(result[0]);
      });
  }
  getPlayerContrat(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/playerContrat/${id}`
    );
  }
  getContrat(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/getContrat/${id}`
    );
  }
  getCentrePlayer(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/one-centre-player/${id}`)
      .pipe(
        map((player: any) => {
          return player.map((p: any) => {
            if (p.cni_expiration != "" && p.cni_expiration != null) {
              const cniexpiration = new Date(p.cni_expiration);
              const daycni =
                cniexpiration.getDate() < 10
                  ? "0" + cniexpiration.getDate()
                  : cniexpiration.getDate();
              const monthcni =
                cniexpiration.getMonth() + 1 < 10
                  ? "0" + (cniexpiration.getMonth() + 1)
                  : cniexpiration.getMonth() + 1;
              const yearcni = cniexpiration.getFullYear();
              p.cni_expiration = yearcni + "-" + monthcni + "-" + daycni;
            }
            if (p.passport_expiration != "" && p.passport_expiration != null) {
              const passportexpiration = new Date(p.passport_expiration);
              const daypassport =
                passportexpiration.getDate() < 10
                  ? "0" + passportexpiration.getDate()
                  : passportexpiration.getDate();
              const monthpassport =
                passportexpiration.getMonth() + 1 < 10
                  ? "0" + (passportexpiration.getMonth() + 1)
                  : passportexpiration.getMonth() + 1;
              const yearpassport = passportexpiration.getFullYear();
              p.passport_expiration =
                yearpassport + "-" + monthpassport + "-" + daypassport;
            }
            return p;
          });
        })
      )
      .subscribe((result) => {
        this.player = result[0];
        this.updatedPlayer.next(result[0]);
      });
  }
  addPersonnel(personnel) {
    let data = new FormData();
    data.append("nom", personnel.nom);
    data.append("salaire", personnel.salaire);
    data.append("rib", personnel.rib);
    data.append("cni", personnel.cni);
    data.append("prenom", personnel.prenom);
    data.append("date_naissance", personnel.date_naissance);
    data.append("lieu_naissance", personnel.lieu_naissance);
    data.append("adresse", personnel.adresse);
    data.append("code_postal", personnel.code_postal);
    data.append("ville", personnel.ville);
    data.append("telephone", personnel.telephone);
    data.append("email", personnel.email);
    data.append("fix", personnel.fix);
    data.append("date_arrive", personnel.date_arrive);
    data.append("depart_club", personnel.depart_club);
    data.append("date_debut", personnel.date_debut);
    data.append("date_fin", personnel.date_fin);
    data.append("commentaire", personnel.commentaire);
    data.append("fonction_salarie", personnel.fonction_salarie);
    data.append("fonction_benevole", personnel.fonction_benevole);
    data.append("diplome", personnel.diplome);
    data.append("date_obtention", personnel.date_obtention);
    data.append("numero_licence", personnel.numero_licence);
    data.append("caisse", personnel.caisse);
    data.append("num", personnel.num);
    data.append("img", personnel.img);
    data.append("centre", personnel.centre);
    this.http
      .post(`${this.link}/${this.API}/${this.endpoint}/addPersonnel`, data)
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigate(["/administration/listpersonnels"]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  updatePhysiqueTest(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/update_physique_test/${id}`,
      { data: data }
    );
  }
  stageRating(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/stage-rating/${id}`,
      data
    );
  }
  updatePersonnel(id, personnel) {
    let data = new FormData();
    data.append("nom", personnel.nom);
    data.append("prenom", personnel.prenom);
    data.append("date_naissance", personnel.date_naissance);
    data.append("lieu_naissance", personnel.lieu_naissance);
    data.append("adresse", personnel.adresse);
    data.append("salaire", personnel.salaire);
    data.append("rib", personnel.rib);
    data.append("cni", personnel.cni);
    data.append("code_postal", personnel.code_postal);
    data.append("ville", personnel.ville);
    data.append("telephone", personnel.telephone);
    data.append("email", personnel.email);
    data.append("fix", personnel.fix);
    data.append("date_arrive", personnel.date_arrive);
    data.append("depart_club", personnel.depart_club);
    data.append("date_debut", personnel.date_debut);
    data.append("date_fin", personnel.date_fin);
    data.append("commentaire", personnel.commentaire);
    data.append("fonction_salarie", personnel.fonction_salarie);
    data.append("fonction_benevole", personnel.fonction_benevole);
    data.append("diplome", personnel.diplome);
    data.append("date_obtention", personnel.date_obtention);
    data.append("numero_licence", personnel.numero_licence);
    data.append("caisse", personnel.caisse);
    data.append("num", personnel.num);
    data.append("img", personnel.img);
    data.append("image", personnel.image);
    data.append("centre", personnel.centre);
    this.http
      .post(
        `${this.link}/${this.API}/${this.endpoint}/updatePersonnel/${id}`,
        data
      )
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigate([`/administration/personnel-infos/${id}`]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addPlayer(isPret = false, player, img, base_img, brothers = []) {
    let data = new FormData();
    data.append("nationalite_ids", "" + player.nationalite_ids);
    data.append("club_id", player.club_id);
    data.append("allergie", player.allergie);
    data.append("capitain", player.capitaine);
    data.append("password", player.password);
    data.append("certificatMedicale", player.certificatMedicale);
    data.append("clubDepuis", player.clubDepuis);
    data.append("clubPrecedent", player.clubPrecedent);
    data.append("qualification", player.qualification);
    data.append("contreIndication", player.contreIndication);
    data.append("dateNaissance", player.dateNaissance);
    data.append("lang", player.lang);
    data.append("deuxiemePoste", player.deuxiemePoste);
    data.append("email", player.email);
    data.append("match_risk", player.match_risk);
    data.append("fix", player.fix);
    data.append("hospitalization", player.hospitalization);
    data.append("licence", player.licence);
    data.append("lieuNaissance", player.lieuNaissance);
    data.append("maillot", player.maillot);
    data.append("mobile", player.mobile);
    data.append("nationalite", player.nationalite);
    data.append("nom", player.nom);
    data.append("numLicence", player.numLicence);
    data.append("numero", player.numero);
    data.append("parcScol", player.parcScol);
    data.append("parcSport", player.parcSport);
    data.append("pied", player.pied);
    data.append("pointure", player.pointure);
    data.append("poste", player.poste);
    data.append("prenom", player.prenom);
    data.append("short", player.short);
    data.append("adresse", player.adresse);
    data.append("cni", player.cni);
    data.append("passport", player.passport);
    data.append("cni_expiration", player.cni_expiration);
    data.append("passport_expiration", player.passport_expiration);
    data.append("type", player.type);
    data.append("club", player.club);
    data.append("adresse_etrange", player.adresse_etrange);
    data.append("pere", player.pere);
    data.append("fonction_pere", player.fonction_pere);
    data.append("mere", player.mere);
    data.append("mere_fonction", player.mere_fonction);
    data.append("contact_urgence", player.contact_urgence);
    data.append("contact_urgence_tele", player.contact_urgence_tele);
    data.append("nomber_freres", player.nomber_freres);
    data.append("image", img);
    data.append("base_img", "");
    data.append("freres", JSON.stringify(brothers));
    data.append("preparateur", player.preparateur);
    data.append("tel_preparateur", player.tel_preparateur);
    data.append("email_preparateur", player.email_preparateur);
    data.append("country", player.country);
    if (isPret == true) {
      data.append("date_debut_pret", player.date_debut_pret);
      data.append("date_return_pret", player.date_return_pret);
      data.append("salaire_pret", player.salaire_pret);
      data.append("club_pret", player.club_pret);
      data.append("status_pret", isPret ? "Pret" : player.status_pret);
    }
    data.append("instat_name", player.instat_name);
    data.append("gps_type", player.gps_type);
    data.append("gps_id", player.gps_id);

    this.http
      .post(`${this.link}/${this.API}/${this.endpoint}/add`, data)
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigate(["/effectif/myTeam"]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  // addCentrePlayer(player, img) {
  //     let data = new FormData();
  //     data.append("allergie", player.allergie);
  //     data.append("password", player.password);
  //     data.append("certificatMedicale", player.certificatMedicale);
  //     data.append("contreIndication", player.contreIndication);
  //     data.append("dateNaissance", player.dateNaissance);
  //     data.append("deuxiemePoste", player.deuxiemePoste);
  //     data.append("email", player.email);
  //     data.append("fix", player.fix);
  //     data.append("hospitalization", player.hospitalization);
  //     data.append("licence", player.licence);
  //     data.append("lieuNaissance", player.lieuNaissance);
  //     data.append("maillot", player.maillot);
  //     data.append("mobile", player.mobile);
  //     data.append("nationalite", player.nationalite);
  //     data.append("nom", player.nom);
  //     data.append("numLicence", player.numLicence);
  //     data.append("numero", player.numero);
  //     data.append("parcScol", player.parcScol);
  //     data.append("parcSport", player.parcSport);
  //     data.append("pied", player.pied);
  //     data.append("pointure", player.pointure);
  //     data.append("poste", player.poste);
  //     data.append("prenom", player.prenom);
  //     data.append("short", player.short);
  //     data.append("adresse", player.adresse);
  //     data.append("cni", player.cni);
  //     data.append("passport", player.passport);
  //     data.append("cni_expiration", player.cni_expiration);
  //     data.append("passport_expiration", player.passport_expiration);
  //     data.append("image", img);
  //     this.http.post(`${this.link}/${this.API}/${this.endpoint}/add-centre-player`, data).subscribe(
  //         result => {
  //             if (result) {
  //                 this.router.navigate(['/vie-centre/centre-players']);
  //             }
  //         },
  //         error => {
  //             console.log(error);
  //         }
  //     );
  // }
  saveAdministratif(player, filesNames, id, base) {
    console.log(base);
    let data = new FormData();
    data.append("nom", player.nom);
    data.append("prenom", player.prenom);
    data.append("password", player.password);
    data.append("email", player.email);
    data.append("nationalite", player.nationalite);
    data.append("date_naiss", player.date_naiss);
    data.append("tel_p", player.tel_p);
    if (base != null) {
      data.append("base_img", base);
    }
    //new
    data.append("num", player.num);
    data.append("pointur", player.pointur);
    data.append("licence", player.licence);
    data.append("parc_scol", player.parc_scol);
    data.append("taille_maillot", player.taille_maillot);
    data.append("taille_short", player.taille_short);
    data.append("parc_sport", player.parc_sport);

    data.append("lieu_naiss", player.lieu_naiss);
    data.append("num_licence", player.num_licence);
    data.append("cni", player.cni);
    data.append("cni_expiration", player.cni_expiration);
    data.append("passport", player.passport);
    data.append("passport_expiration", player.passport_expiration);
    data.append("hebergement", player.hebergement);
    data.append("ecole", player.ecole);
    data.append("ex_club", player.ex_club);
    data.append("ex_club_date", player.ex_club_date);
    data.append("img", player.img);
    data.append("cni_image", player.cni_image);
    data.append("autorisation_sortie", player.autorisation_sortie);
    data.append("formulaire_inscription", player.formulaire_inscription);
    data.append("formulaire_licence", player.formulaire_licence);
    data.append("questionnaire_medical", player.questionnaire_medical);
    data.append("accord_parentel", player.accord_parentel);
    data.append("passport_image", player.passport_image);
    data.append("carte_securite_social", player.carte_securite_social);
    data.append(
      "certificat_securite_social",
      player.certificat_securite_social
    );
    data.append("carnet_sante", player.carnet_sante);
    data.append(
      "autorisation_utilisation_image",
      player.autorisation_utilisation_image
    );
    data.append("cotisation", player.cotisation);
    data.append("contrat", player.contrat);
    data.append("justificat_domicile", player.justificat_domicile);
    data.append("dernier_bulletin", player.dernier_bulletin);
    data.append("rib", player.rib);
    data.append("rib_number", player.rib_number);
    data.append("engagement_financier", player.engagement_financier);
    data.append("etat_lieu_entrant", player.etat_lieu_entrant);
    data.append(
      "autorisation_responsabilte_medical",
      player.autorisation_responsabilte_medical
    );
    data.append("etat_lieu_sortant", player.etat_lieu_sortant);
    data.append("reglements_interieur", player.reglements_interieur);
    data.append("image", filesNames.image);
    data.append("cniImage", filesNames.cniImage);
    data.append("passportImage", filesNames.passportImage);
    data.append("autorisationSortie", filesNames.autorisationSortie);
    data.append("formulaireInscription", filesNames.formulaireInscription);
    data.append("formulaireLicence", filesNames.formulaireLicence);
    data.append("questionnaireMedical", filesNames.questionnaireMedical);
    data.append("accordParental", filesNames.accordParental);
    data.append("carteSecurite", filesNames.carteSecurite);
    data.append("certificatSecurite", filesNames.certificatSecurite);
    data.append("carnetSante", filesNames.carnetSante);
    data.append("autorisationUtilisation", filesNames.autorisationUtilisation);
    data.append("cotisationImage", filesNames.cotisationImage);
    data.append("contratImage", filesNames.contratImage);
    data.append("justificationDomicile", filesNames.justificationDomicile);
    data.append("dernierBulletin", filesNames.dernierBulletin);
    data.append("ribImage", filesNames.ribImage);
    data.append("engagementFinancier", filesNames.engagementFinancier);
    data.append("etatLieuEntrant", filesNames.etatLieuEntrant);
    data.append("etatLieuSortant", filesNames.etatLieuSortant);
    data.append(
      "autorisationResponsabilteMedical",
      filesNames.autorisationResponsabilteMedical
    );
    data.append("reglementsInterieur", filesNames.reglementsInterieur);
    const req = new HttpRequest(
      "POST",
      `${this.link}/${this.API}/joueur/updateAdministratif/${id}`,
      data,
      {
        reportProgress: true,
        responseType: "json",
      }
    );

    return this.http.request(req);
  }
  saveCentreAdministratif(player, filesNames, id) {
    let data = new FormData();
    data.append("nom", player.nom);
    data.append("prenom", player.prenom);
    data.append("password", player.password);
    data.append("email", player.email);
    data.append("nationalite", player.nationalite);
    data.append("date_naiss", player.date_naiss);
    data.append("tel_p", player.tel_p);
    data.append("lieu_naiss", player.lieu_naiss);
    data.append("num_licence", player.num_licence);
    data.append("cni", player.cni);
    data.append("cni_expiration", player.cni_expiration);
    data.append("passport", player.passport);
    data.append("passport_expiration", player.passport_expiration);
    data.append("hebergement", player.hebergement);
    data.append("ecole", player.ecole);
    data.append("img", player.img);
    data.append("cni_image", player.cni_image);
    data.append("autorisation_sortie", player.autorisation_sortie);
    data.append("formulaire_inscription", player.formulaire_inscription);
    data.append("formulaire_licence", player.formulaire_licence);
    data.append("questionnaire_medical", player.questionnaire_medical);
    data.append("accord_parentel", player.accord_parentel);
    data.append("passport_image", player.passport_image);
    data.append("carte_securite_social", player.carte_securite_social);
    data.append(
      "certificat_securite_social",
      player.certificat_securite_social
    );
    data.append("carnet_sante", player.carnet_sante);
    data.append(
      "autorisation_utilisation_image",
      player.autorisation_utilisation_image
    );
    data.append("cotisation", player.cotisation);
    data.append("contrat", player.contrat);
    data.append("justificat_domicile", player.justificat_domicile);
    data.append("dernier_bulletin", player.dernier_bulletin);
    data.append("rib", player.rib);
    data.append("engagement_financier", player.engagement_financier);
    data.append("etat_lieu_entrant", player.etat_lieu_entrant);
    data.append(
      "autorisation_responsabilte_medical",
      player.autorisation_responsabilte_medical
    );
    data.append("etat_lieu_sortant", player.etat_lieu_sortant);
    data.append("reglements_interieur", player.reglements_interieur);
    data.append("image", filesNames.image);
    data.append("cniImage", filesNames.cniImage);
    data.append("passportImage", filesNames.passportImage);
    data.append("autorisationSortie", filesNames.autorisationSortie);
    data.append("formulaireInscription", filesNames.formulaireInscription);
    data.append("formulaireLicence", filesNames.formulaireLicence);
    data.append("questionnaireMedical", filesNames.questionnaireMedical);
    data.append("accordParental", filesNames.accordParental);
    data.append("carteSecurite", filesNames.carteSecurite);
    data.append("certificatSecurite", filesNames.certificatSecurite);
    data.append("carnetSante", filesNames.carnetSante);
    data.append("autorisationUtilisation", filesNames.autorisationUtilisation);
    data.append("cotisationImage", filesNames.cotisationImage);
    data.append("contratImage", filesNames.contratImage);
    data.append("justificationDomicile", filesNames.justificationDomicile);
    data.append("dernierBulletin", filesNames.dernierBulletin);
    data.append("ribImage", filesNames.ribImage);
    data.append("engagementFinancier", filesNames.engagementFinancier);
    data.append("etatLieuEntrant", filesNames.etatLieuEntrant);
    data.append("etatLieuSortant", filesNames.etatLieuSortant);
    data.append(
      "autorisationResponsabilteMedical",
      filesNames.autorisationResponsabilteMedical
    );
    data.append("reglementsInterieur", filesNames.reglementsInterieur);
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateCentreAdministratif/${id}`,
      data
    );
  }
  savePlayer(isPret = false, player, img, id, logo_base64, brothers = []) {
    let data = new FormData();
    data.append("nationalite_ids", "" + player.nationalite_ids);
    data.append("club_id", player.club_id);
    data.append("certificatMedicale", player.certificatMedicale);
    data.append("clubDepuis", player.clubDepuis);
    data.append("capitain", player.capitaine);
    data.append("clubPrecedent", player.clubPrecedent);
    data.append("contreIndication", player.contreIndication);
    data.append("qualification", player.qualification);
    data.append("dateNaissance", player.dateNaissance);
    data.append("deuxiemePoste", player.deuxiemePoste);
    data.append("email", player.email);
    data.append("lang", player.lang);
    data.append("match_risk", player.match_risk);
    data.append("fix", player.fix);
    data.append("hospitalization", player.hospitalization);
    data.append("licence", player.licence);
    data.append("lieuNaissance", player.lieuNaissance);
    data.append("maillot", player.maillot);
    data.append("mobile", player.mobile);
    data.append("nationalite", player.nationalite);
    data.append("nom", player.nom);
    data.append("numLicence", player.numLicence);
    data.append("numero", player.numero);
    data.append("parcScol", player.parcScol);
    data.append("parcSport", player.parcSport);
    data.append("pied", player.pied);
    data.append("pointure", player.pointure);
    data.append("poste", player.poste);
    data.append("prenom", player.prenom);
    data.append("short", player.short);
    data.append("adresse", player.adresse);
    data.append("img", player.img);
    data.append("cni", player.cni);
    data.append("passport", player.passport);
    data.append("cni_expiration", player.cni_expiration);
    data.append("passport_expiration", player.passport_expiration);
    data.append("type", player.type);
    data.append("club", player.club);
    data.append("adresse_etrange", player.adresse_etrange);
    data.append("pere", player.pere);
    data.append("fonction_pere", player.fonction_pere);
    data.append("mere", player.mere);
    data.append("mere_fonction", player.mere_fonction);
    data.append("contact_urgence", player.contact_urgence);
    data.append("contact_urgence_tele", player.contact_urgence_tele);
    data.append("nomber_freres", player.nomber_freres);
    data.append("preparateur", player.preparateur);
    data.append("tel_preparateur", player.tel_preparateur);
    data.append("email_preparateur", player.email_preparateur);
    data.append("id", id);
    data.append("image", img);
    if (isPret == true) {
      data.append("date_debut_pret", player.date_debut_pret);
      data.append("date_return_pret", player.date_return_pret);
      data.append("salaire_pret", player.salaire_pret);
      data.append("club_pret", player.club_pret);
      data.append("status_pret", isPret ? "Pret" : player.status_pret);
    } else {
      data.append("status_pret", "player");
    }
    data.append("instat_name", player.instat_name);
    data.append("gps_type", player.gps_type);
    data.append("gps_id", player.gps_id);

    data.append("base_img", null);
    // data.append("img_send", logo_base64);
    data.append("freres", JSON.stringify(brothers));
    this.http
      .post(`${this.link}/${this.API}/${this.endpoint}/update`, data)
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigate([`/playerDetails/playerFile/${id}`]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  // saveCentrePlayer(player, img, id) {
  //     let data = new FormData();
  //     data.append("certificatMedicale", player.certificatMedicale);
  //     data.append("contreIndication", player.contreIndication);
  //     data.append("dateNaissance", player.dateNaissance);
  //     data.append("deuxiemePoste", player.deuxiemePoste);
  //     data.append("email", player.email);
  //     data.append("fix", player.fix);
  //     data.append("hospitalization", player.hospitalization);
  //     data.append("licence", player.licence);
  //     data.append("lieuNaissance", player.lieuNaissance);
  //     data.append("maillot", player.maillot);
  //     data.append("mobile", player.mobile);
  //     data.append("nationalite", player.nationalite);
  //     data.append("nom", player.nom);
  //     data.append("numLicence", player.numLicence);
  //     data.append("numero", player.numero);
  //     data.append("parcScol", player.parcScol);
  //     data.append("parcSport", player.parcSport);
  //     data.append("pied", player.pied);
  //     data.append("pointure", player.pointure);
  //     data.append("poste", player.poste);
  //     data.append("prenom", player.prenom);
  //     data.append("short", player.short);
  //     data.append("adresse", player.adresse);
  //     data.append("img", player.img);
  //     data.append("cni", player.cni);
  //     data.append("passport", player.passport);
  //     data.append("cni_expiration", player.cni_expiration);
  //     data.append("passport_expiration", player.passport_expiration);
  //     data.append("id", id);
  //     data.append("image", img);
  //     this.http.post(`${this.link}/${this.API}/${this.endpoint}/update-centre-player', data).subscribe(
  //         result => {
  //             if (result) {
  //                 this.router.navigate(['/vie-centre/centre-player/player-file/${id}`]);
  //             }
  //         },
  //         error => {
  //             console.log(error);
  //         }
  //     );
  // }
  deletePlayer(id, returned = true, type = null) {
    if (!returned) {
      return this.http.delete(
        `${this.link}/${this.API}/joueur/delete/${id}/${type}`
      );
    }
    this.http
      .delete(`${this.link}/${this.API}/${this.endpoint}/delete/${id}`)
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigate(["/effectif/myTeam"]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  deletePersonnel(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deletePersonnel/${id}`
    );
  }
  deleteSpending(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/salarysignDelete/${id}`
    );
  }
  // deleteCentrePlayer(id) {
  //     this.http.delete(`${this.link}/${this.API}/${this.endpoint}/delete-centre-player/${id}`).subscribe(
  //         result => {
  //             if (result) {
  //                 this.router.navigate(['/vie-centre/centre-players']);
  //             }
  //         },
  //         error => {
  //             console.log(error);
  //         }
  //     );
  // }

  public getCommentsStage(id: number, stageId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.link}/${this.API}/joueur/comments/${id}/${stageId}`
    );
  }

  public getStatistiqueStage(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.link}/${this.API}/joueur/getStatistiqueStage/${id}`
    );
  }
  getComments(id: number) {
    this.http
      .get(`${this.link}/${this.API}/joueur/comments/${id}`)
      .subscribe((result) => {
        this.comments = result;
        this.updatedComments.next(result);
      });
  }
  traitmentsall() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/traitmentsall`
    );
  }
  butMarqueZone(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/butMarqueZone/${id}`)
      .subscribe((result) => {
        this.updatedButMarqueZone.next(result);
      });
  }
  cartonJauneZone(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/cartonJauneZone/${id}`)
      .subscribe((result) => {
        this.updatedCartonJauneZone.next(result);
      });
  }
  cartonRougeZone(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/cartonRougeZone/${id}`)
      .subscribe((result) => {
        this.updatedCartonRougeZone.next(result);
      });
  }
  passeDecisiveZone(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/passeDecisiveZone/${id}`)
      .subscribe((result) => {
        this.updatedPasseDecisiveZone.next(result);
      });
  }
  deleteHebergementComment(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteHebergementComment/${id}`
    );
  }
  deleteCentreHebergementComment(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteCentreHebergementComment/${id}`
    );
  }
  getHebergementComment(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/hebergementComment/${id}`
    );
  }
  getPcma(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/pcma/${id}`
    );
  }
  getMatchsComments(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/matchs_comments/${id}`
    );
  }
  getTriningComments(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/trining_comments/${id}`
    );
  }
  deleteMatchComment(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteMatchComment/${id}`
    );
  }
  // updatePcma(id, infos) {
  //     return this.http.post(`${this.link}/${this.API}/${this.endpoint}/update_pcma/${id}`, infos);
  // }
  // insertPcma(id, infos) {
  //     return this.http.post(`${this.link}/${this.API}/${this.endpoint}/pcma/${id}`, infos);
  // }
  addFavori(playerId) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/joueur-favori-add/` + playerId
    );
  }
  deleteFavori(playerId) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/joueur-favori-delete/` +
      playerId
    );
  }
  getCentreHebergementComment(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/centreHebergementComment/${id}`
    );
  }
  getHebergementComments(id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/hebergementComments/${id}`
      )
      .subscribe((result) => {
        this.comments = result;
        this.updatedComments.next(result);
      });
  }
  getCentreHebergementComments(id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/centreHebergementComments/${id}`
      )
      .subscribe((result) => {
        this.comments = result;
        this.updatedComments.next(result);
      });
  }
  addHebergementComment(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addHebergementComment/${id}`,
      data
    );
  }
  playerTerminated(data) {
    let request = { description: data.description };
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/player-terminated/` +
      data.player_id,
      request
    );
  }
  addCentreHebergementComment(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addCentreHebergementComment/${id}`,
      data
    );
  }
  updateHebergementComment(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/editHebergementComment/${id}`,
      data
    );
  }
  updateCentreHebergementComment(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/editHebergementComment/${id}`,
      data
    );
  }
  deleteRoom(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteRoom/${id}`
    );
  }
  getRoom(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/room/${id}`
    );
  }
  getRooms(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/rooms/${id}`)
      .pipe(
        map((element: any) => {
          return element.map((room) => {
            const date_entre = new Date(room.date_entre);
            const day =
              date_entre.getDate() < 10
                ? "0" + date_entre.getDate()
                : date_entre.getDate();
            const month =
              date_entre.getMonth() + 1 < 10
                ? "0" + (date_entre.getMonth() + 1)
                : date_entre.getMonth() + 1;
            const year = date_entre.getFullYear();
            room.date_entre = year + "-" + month + "-" + day;
            const date_sortie = new Date(room.date_sortie);
            const depuisday =
              date_sortie.getDate() < 10
                ? "0" + date_sortie.getDate()
                : date_sortie.getDate();
            const depuismonth =
              date_sortie.getMonth() + 1 < 10
                ? "0" + (date_sortie.getMonth() + 1)
                : date_sortie.getMonth() + 1;
            const depuisyear = date_sortie.getFullYear();
            room.date_sortie = depuisyear + "-" + depuismonth + "-" + depuisday;
            return room;
          });
        })
      )
      .subscribe((result) => {
        this.rooms = result;
        this.updatedRooms.next(result);
      });
  }
  addRoom(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addRoom/${id}`,
      data
    );
  }
  updateRoom(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/editRoom/${id}`,
      data
    );
  }
  deleteCentreRoom(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteCentreRoom/${id}`
    );
  }
  getCentreRoom(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/centre-room/${id}`
    );
  }
  getCentreRooms(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/centre-rooms/${id}`)
      .pipe(
        map((element: any) => {
          return element.map((room) => {
            const date_entre = new Date(room.date_entre);
            const day =
              date_entre.getDate() < 10
                ? "0" + date_entre.getDate()
                : date_entre.getDate();
            const month =
              date_entre.getMonth() + 1 < 10
                ? "0" + (date_entre.getMonth() + 1)
                : date_entre.getMonth() + 1;
            const year = date_entre.getFullYear();
            room.date_entre = year + "-" + month + "-" + day;
            if (
              room.date_sortie != "" &&
              room.date_sortie != null &&
              room.date_sortie != "0000-00-00"
            ) {
              const date_sortie = new Date(room.date_sortie);
              const depuisday =
                date_sortie.getDate() < 10
                  ? "0" + date_sortie.getDate()
                  : date_sortie.getDate();
              const depuismonth =
                date_sortie.getMonth() + 1 < 10
                  ? "0" + (date_sortie.getMonth() + 1)
                  : date_sortie.getMonth() + 1;
              const depuisyear = date_sortie.getFullYear();
              room.date_sortie =
                depuisyear + "-" + depuismonth + "-" + depuisday;
            }
            return room;
          });
        })
      )
      .subscribe((result) => {
        this.rooms = result;
        this.updatedRooms.next(result);
      });
  }
  addCentreRoom(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addCentreRoom/${id}`,
      data
    );
  }
  updateCentreRoom(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/editCentreRoom/${id}`,
      data
    );
  }
  deleteSortie(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteSortie/${id}`
    );
  }
  getSortie(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/sortie/${id}`
    );
  }
  getSorties() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/sorties`)
      .subscribe((result) => {
        this.sorties = result;
        this.updatedSorties.next(result);
      });
  }
  getPlayerSorties(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/playerSorties/${id}`)
      .subscribe((result) => {
        this.sorties = result;
        this.updatedSorties.next(result);
      });
  }
  getTestsPhysique(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getTestsPhysique/${id}`)
      .subscribe((result) => {
        this.testsPhysique = result;
        this.updatedTestsPhysique.next(result);
      });
  }
  getCurrentMonthSorties() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/monthSorties`)
      .subscribe((result) => {
        this.sorties = result;
        this.updatedSorties.next(result);
      });
  }
  addSortie(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addSortie/${id}`,
      data
    );
  }
  saveContrat(id, data) {
    let dataToSend = new FormData();
    dataToSend.append("file", data.file);
    dataToSend.append("type", data.type);
    dataToSend.append("duree", data.duree);
    dataToSend.append("date_debut", data.date_debut);
    dataToSend.append("date_fin", data.date_fin);
    dataToSend.append("mois", data.mois);
    dataToSend.append("convention", data.convention);
    dataToSend.append("conditions", data.conditions);
    dataToSend.append("centre", "" + data.centre);
    dataToSend.append("contractYears", JSON.stringify(data.contractYears));
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/saveContrat/${id}`,
      dataToSend
    );
  }
  updatePlayerContrat(id, data) {
    let dataToSend = new FormData();
    dataToSend.append("file", data.file);
    dataToSend.append("type", data.type);
    dataToSend.append("duree", data.duree);
    dataToSend.append("date_debut", data.date_debut);
    dataToSend.append("date_fin", data.date_fin);
    dataToSend.append("convention", data.convention);
    dataToSend.append("conditions", data.conditions);
    dataToSend.append("centre", data.centre);
    dataToSend.append("contractYears", JSON.stringify(data.contractYears));
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateContratPlayer/${id}`,
      dataToSend
    );
  }
  updateContrat(id, data) {
    let dataToSend = new FormData();
    dataToSend.append("file", data.file);
    dataToSend.append("type", data.type);
    dataToSend.append("duree", data.duree);
    dataToSend.append("date_debut", data.date_debut);
    dataToSend.append("date_fin", data.date_fin);
    dataToSend.append("convention", data.convention);
    dataToSend.append("conditions", data.conditions);
    dataToSend.append("mois", data.mois);
    dataToSend.append("centre", data.centre);
    dataToSend.append("contractYears", JSON.stringify(data.contractYears));
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateContrat/${id}`,
      dataToSend
    );
  }
  updateSortie(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateSortie/${id}`,
      data
    );
  }
  getTopJoueur() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/topJoueur`);
  }
  months_paid() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/months_paid`
    );
  }
  payMonth(month, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/months_paid/${id}`,
      month
    );
  }
  updatePayMonth(month, file) {
    let months = new FormData();
    months.append("file", file);
    months.append("id", file);
    months.append("type", file);
    months.append("remarques", file);
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/months_paid`,
      month
    );
  }
  getPersonnels() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/personnels`
    );
  }
  playersWithContracts() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/playersWithContracts`)
      .subscribe((result) => {
        this.updatedPlayers.next(result);
      });
  }
  getPersonnel(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/personnel/${id}`
    );
  }
  getTopButeur() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/topButeur`);
  }
  getTopButeurCompetition(competition) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/topButeurCompetition/` +
      competition
    );
  }
  getTopPasseur() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/topPasseur`)
      .subscribe((result) => {
        this.updatedTopPasseur.next(result);
      });
  }
  getTopPasseurCompetition(competition) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/topPasseurCompetition/` +
        competition
      )
      .subscribe((result) => {
        this.updatedTopPasseur.next(result);
      });
  }
  numberYellowCards() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/numberYellowCards`
    );
  }
  numberRedCards() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/numberRedCards`
    );
  }
  topTowJoueur() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/topTowJoueur`
    );
  }
  topTowButeur() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/topTowButeur`
    );
  }
  topTowPasseur() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/topTowPasseur`
    );
  }
  unavailableInjured() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/unavailableInjured`
    );
  }
  domsAlerts() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/domsAlerts`
    );
  }
  rehabInjured() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/rehabInjured`
    );
  }
  morbidites() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/morbidites`
    );
  }
  birthdays() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/birthdays`);
  }
  cniexpired() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/cniexpired`
    );
  }
  passportexpired() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/passportexpired`
    );
  }
  getCombinaisons() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/combinaisons`
    );
  }
  getCombinaisonsCompetition(competition) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/combinaisonsCompetition/` +
      competition
    );
  }
  getTrainings(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/trainings/${id}`)
      .subscribe((result) => {
        this.trainings = result;
        this.updatedTrainings.next(result);
      });
  }
  getTrainingsDatabase(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/database-trainings/${id}`)
      .subscribe((result) => {
        this.trainings = result;
        this.updatedTrainingsDatabase.next(result);
      });
  }
  addPlayerToStageMultip(stageId, request) {
    this.http
      .post(
        `${this.link}/${this.API}/${this.endpoint}/addPlayerStageMutip/` +
        stageId,
        request
      )
      .subscribe((result: boolean) => {
        if (result) {
          this.router.navigate(["/effectif/stage"]);
        }
      });
  }
  addCommentStage(id, comment) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addComment/${id}`,
      comment
    );
  }
  addComment(id, comment) {
    this.http
      .post(
        `${this.link}/${this.API}/${this.endpoint}/addComment/${id}`,
        comment
      )
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigate([`/playerDetails/comments/${id}`]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  deleteComment(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteComment/${id}`
    );
  }
  deleteContrat(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteContrat/${id}`
    );
  }
  getComment(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/comment/${id}`
    );
  }
  editComment(id, comment, joueurId) {
    this.http
      .post(
        `${this.link}/${this.API}/${this.endpoint}/editComment/${id}`,
        comment
      )
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigate([`/playerDetails/comments/` + joueurId]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  editCommentStage(id, comment, joueurId) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/editComment/${id}`,
      comment
    );
  }

  addInjury(id, file, infos) {
    let data = new FormData();
    data.append("type", infos.type);
    data.append("location", infos.location);
    data.append("date", infos.date);
    data.append("date_retour_prevue", infos.date_retour_prevue);
    data.append("durre_injury", infos.durre_injury);
    data.append("returnDate", infos.returnDate);
    data.append("info", infos.info);
    data.append("gravity", infos.gravity);
    data.append("circonstances", infos.circonstances);
    data.append("conditions", infos.conditions);
    data.append("terrain", infos.terrain);
    data.append("traitement_date", infos.traitement_date);
    data.append("traitement_intervenant", infos.traitement_intervenant);
    data.append("traitement_nom", infos.traitement_nom);
    data.append("traitement", infos.traitement);
    data.append("traitement_note", infos.traitement_note);
    // data.append("reprise_footing", infos.reprise_footing);
    // data.append("reprise_velo", infos.reprise_velo);
    // data.append("reprise_physique", infos.reprise_physique);
    // data.append("sans_ballon", infos.sans_ballon);
    data.append(
      "reathletisation_individuelle",
      infos.reathletisation_individuelle
    );
    data.append("reprise_groupe", infos.reprise_groupe);
    data.append("reprise_competition", infos.reprise_competition);
    data.append("moyen_recuperation", infos.moyen_recuperation);
    data.append("file", file);
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addInjuryweb/${id}`,
      data
    );
  }
  getInjuries(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/injuries/${id}`)
      .subscribe((result) => {
        this.injuries = result;
        this.updatedInjuries.next(result);
      });
  }
  getAllInjuries() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/allinjuries`)
      .subscribe((result) => {
        this.injuries = result;
        this.updatedInjuries.next(result);
      });
  }

  deleteInjury(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteInjury/${id}`
    );
  }
  getInjury(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/oneInjury/${id}`
    );
  }
  updateInjury(id, infos, file, playerId) {
    let data = new FormData();
    data.append("type", infos.type);
    data.append("location", infos.location);
    data.append("date", infos.date);
    data.append("date_retour_prevue", infos.date_retour_prevue);
    data.append("durre_injury", infos.durre_injury);
    data.append("returnDate", infos.returnDate);
    data.append("info", infos.info);
    data.append("gravity", infos.gravity);
    data.append("circonstances", infos.circonstances);
    data.append("conditions", infos.conditions);
    data.append("terrain", infos.terrain);
    data.append("traitement_date", infos.traitement_date);
    data.append("traitement_intervenant", infos.traitement_intervenant);
    data.append("traitement_nom", infos.traitement_nom);
    data.append("traitement", infos.traitement);
    data.append("traitement_note", infos.traitement_note);
    // data.append("reprise_footing", infos.reprise_footing);
    // data.append("reprise_velo", infos.reprise_velo);
    // data.append("reprise_physique", infos.reprise_physique);
    // data.append("sans_ballon", infos.sans_ballon);
    data.append("reprise_groupe", infos.reprise_groupe);
    data.append(
      "reathletisation_individuelle",
      infos.reathletisation_individuelle
    );
    data.append("reprise_competition", infos.reprise_competition);
    data.append("moyen_recuperation", infos.moyen_recuperation);
    data.append("fiche", infos.fiche);
    data.append("file", file);
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateInjury/${id}`,
      data
    );
  }
  getAthletiques(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/athletiques/${id}`)
      .pipe(
        map((r: any) => {
          return r == null
            ? null
            : r.map((element) => {
              const dateD = new Date(element.date);
              const dayD =
                dateD.getDate() < 10
                  ? "0" + dateD.getDate()
                  : dateD.getDate();
              const monthD =
                dateD.getMonth() + 1 < 10
                  ? "0" + (dateD.getMonth() + 1)
                  : dateD.getMonth() + 1;
              const yearD = dateD.getFullYear();
              const heure =
                dateD.getHours() < 10
                  ? "0" + dateD.getHours()
                  : dateD.getHours();
              const minute =
                dateD.getMinutes() < 10
                  ? "0" + dateD.getMinutes()
                  : dateD.getMinutes();
              element.date =
                yearD +
                "-" +
                monthD +
                "-" +
                dayD +
                " " +
                heure +
                ":" +
                minute;
              return element;
            });
        })
      )
      .subscribe((result: any) => {
        this.athletiques = result;
        this.updatedAthletiques.next(result);
      });
  }
  getMentales(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/mentales/${id}`)
      .pipe(
        map((r: any) => {
          return r == null
            ? null
            : r.map((element) => {
              const dateD = new Date(element.date);
              const dayD =
                dateD.getDate() < 10
                  ? "0" + dateD.getDate()
                  : dateD.getDate();
              const monthD =
                dateD.getMonth() + 1 < 10
                  ? "0" + (dateD.getMonth() + 1)
                  : dateD.getMonth() + 1;
              const yearD = dateD.getFullYear();
              const heure =
                dateD.getHours() < 10
                  ? "0" + dateD.getHours()
                  : dateD.getHours();
              const minute =
                dateD.getMinutes() < 10
                  ? "0" + dateD.getMinutes()
                  : dateD.getMinutes();
              element.date =
                yearD +
                "-" +
                monthD +
                "-" +
                dayD +
                " " +
                heure +
                ":" +
                minute;
              return element;
            });
        })
      )
      .subscribe((result: any) => {
        this.mentales = result;
        this.updatedMentales.next(result);
      });
  }
  getScolaires(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/scolaires/${id}`)
      .pipe(
        map((r: any) => {
          return r == null
            ? null
            : r.map((element) => {
              const dateD = new Date(element.date);
              const dayD =
                dateD.getDate() < 10
                  ? "0" + dateD.getDate()
                  : dateD.getDate();
              const monthD =
                dateD.getMonth() + 1 < 10
                  ? "0" + (dateD.getMonth() + 1)
                  : dateD.getMonth() + 1;
              const yearD = dateD.getFullYear();
              const heure =
                dateD.getHours() < 10
                  ? "0" + dateD.getHours()
                  : dateD.getHours();
              const minute =
                dateD.getMinutes() < 10
                  ? "0" + dateD.getMinutes()
                  : dateD.getMinutes();
              element.date =
                yearD + "-" + monthD + "-" + dayD + "" + heure + ":" + minute;
              return element;
            });
        })
      )
      .subscribe((result: any) => {
        this.scolaires = result;
        this.updatedScolaires.next(result);
      });
  }
  getTactiques(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/tactiques/${id}`)
      .pipe(
        map((r: any) => {
          return r == null
            ? null
            : r.map((element) => {
              const dateD = new Date(element.date);
              const dayD =
                dateD.getDate() < 10
                  ? "0" + dateD.getDate()
                  : dateD.getDate();
              const monthD =
                dateD.getMonth() + 1 < 10
                  ? "0" + (dateD.getMonth() + 1)
                  : dateD.getMonth() + 1;
              const yearD = dateD.getFullYear();
              const heure =
                dateD.getHours() < 10
                  ? "0" + dateD.getHours()
                  : dateD.getHours();
              const minute =
                dateD.getMinutes() < 10
                  ? "0" + dateD.getMinutes()
                  : dateD.getMinutes();
              element.date =
                yearD + "-" + monthD + "-" + dayD + "" + heure + ":" + minute;
              return element;
            });
        })
      )
      .subscribe((result: any) => {
        this.tactiques = result;
        this.updatedTactiques.next(result);
      });
  }
  getTechniques(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/techniques/${id}`)
      .pipe(
        map((r: any) => {
          return r == null
            ? null
            : r.map((element) => {
              const dateD = new Date(element.date);
              const dayD =
                dateD.getDate() < 10
                  ? "0" + dateD.getDate()
                  : dateD.getDate();
              const monthD =
                dateD.getMonth() + 1 < 10
                  ? "0" + (dateD.getMonth() + 1)
                  : dateD.getMonth() + 1;
              const yearD = dateD.getFullYear();
              const heure =
                dateD.getHours() < 10
                  ? "0" + dateD.getHours()
                  : dateD.getHours();
              const minute =
                dateD.getMinutes() < 10
                  ? "0" + dateD.getMinutes()
                  : dateD.getMinutes();
              element.date =
                yearD + "-" + monthD + "-" + dayD + "" + heure + ":" + minute;
              return element;
            });
        })
      )
      .subscribe((result: any) => {
        this.techniques = result;
        this.updatedTechniques.next(result);
      });
  }
  updateTechniques(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateTechniques/${id}`,
      data
    );
  }
  updateScolaires(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateScolaires/${id}`,
      data
    );
  }
  updateMentales(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateMentales/${id}`,
      data
    );
  }
  updateTactiques(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateTactiques/${id}`,
      data
    );
  }
  updateAthletiques(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateAthletiques/${id}`,
      data
    );
  }
  addTechniques(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addTechniques/${id}`,
      data
    );
  }
  //? Techniques Gardien
  updateTechniquesGardien(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateTechniquesGardien/${id}`,
      data
    );
  }
  addTechniquesGardien(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addTechniquesGardien/${id}`,
      data
    );
  }
  deleteTechniquesGardien(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/techniquesGardien/${id}`
    );
  }
  //? Tactiques Gardien
  addTactiquesGardien(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addTactiquesGardien/${id}`,
      data
    );
  }
  deleteTactiquesGardien(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/tactiquesGardien/${id}`
    );
  }
  updateTactiquesGardien(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateTactiquesGardien/${id}`,
      data
    );
  }

  addScolaires(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addScolaires/${id}`,
      data
    );
  }
  addMentales(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addMentales/${id}`,
      data
    );
  }
  addTactiques(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addTactiques/${id}`,
      data
    );
  }
  addAthletiques(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addAthletiques/${id}`,
      data
    );
  }
  deleteTechniques(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/techniques/${id}`
    );
  }
  deleteScolaires(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/scolaires/${id}`
    );
  }
  deleteMentales(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/mentales/${id}`
    );
  }
  deleteTactiques(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/tactiques/${id}`
    );
  }
  deleteAthletiques(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/athletiques/${id}`
    );
  }
  getVitesse(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/vitesse/${id}`)
      .pipe(
        map((r: any) => {
          return r == null
            ? null
            : r.map((element) => {
              const dateD = new Date(element.date);
              const dayD =
                dateD.getDate() < 10
                  ? "0" + dateD.getDate()
                  : dateD.getDate();
              const monthD =
                dateD.getMonth() + 1 < 10
                  ? "0" + (dateD.getMonth() + 1)
                  : dateD.getMonth() + 1;
              const yearD = dateD.getFullYear();
              const heure =
                dateD.getHours() < 10
                  ? "0" + dateD.getHours()
                  : dateD.getHours();
              const minute =
                dateD.getMinutes() < 10
                  ? "0" + dateD.getMinutes()
                  : dateD.getMinutes();
              element.date =
                yearD + "-" + monthD + "-" + dayD + "" + heure + ":" + minute;
              return element;
            });
        })
      )
      .subscribe((result: any) => {
        this.vitesse = result;
        this.updatedVitesse.next(this.vitesse);
      });
  }
  getAerobie(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/aerobie/${id}`)
      .pipe(
        map((r: any) => {
          return r == null
            ? null
            : r.map((element) => {
              const dateD = new Date(element.date);
              const dayD =
                dateD.getDate() < 10
                  ? "0" + dateD.getDate()
                  : dateD.getDate();
              const monthD =
                dateD.getMonth() + 1 < 10
                  ? "0" + (dateD.getMonth() + 1)
                  : dateD.getMonth() + 1;
              const yearD = dateD.getFullYear();
              const heure =
                dateD.getHours() < 10
                  ? "0" + dateD.getHours()
                  : dateD.getHours();
              const minute =
                dateD.getMinutes() < 10
                  ? "0" + dateD.getMinutes()
                  : dateD.getMinutes();
              element.date =
                yearD + "-" + monthD + "-" + dayD + "" + heure + ":" + minute;
              return element;
            });
        })
      )
      .subscribe((result: any) => {
        this.aerobie = result;
        this.updatedAerobie.next(this.aerobie);
      });
  }
  getForce(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/force/${id}`)
      .pipe(
        map((r: any) => {
          return r == null
            ? null
            : r.map((element) => {
              const dateD = new Date(element.date);
              const dayD =
                dateD.getDate() < 10
                  ? "0" + dateD.getDate()
                  : dateD.getDate();
              const monthD =
                dateD.getMonth() + 1 < 10
                  ? "0" + (dateD.getMonth() + 1)
                  : dateD.getMonth() + 1;
              const yearD = dateD.getFullYear();
              const heure =
                dateD.getHours() < 10
                  ? "0" + dateD.getHours()
                  : dateD.getHours();
              const minute =
                dateD.getMinutes() < 10
                  ? "0" + dateD.getMinutes()
                  : dateD.getMinutes();
              element.date =
                yearD + "-" + monthD + "-" + dayD + "" + heure + ":" + minute;
              return element;
            });
        })
      )
      .subscribe((result: any) => {
        this.force = result;
        this.updatedForce.next(this.force);
      });
  }
  getSouplesse(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/souplesse/${id}`)
      .pipe(
        map((r: any) => {
          return r == null
            ? null
            : r.map((element) => {
              const dateD = new Date(element.date);
              const dayD =
                dateD.getDate() < 10
                  ? "0" + dateD.getDate()
                  : dateD.getDate();
              const monthD =
                dateD.getMonth() + 1 < 10
                  ? "0" + (dateD.getMonth() + 1)
                  : dateD.getMonth() + 1;
              const yearD = dateD.getFullYear();
              const heure =
                dateD.getHours() < 10
                  ? "0" + dateD.getHours()
                  : dateD.getHours();
              const minute =
                dateD.getMinutes() < 10
                  ? "0" + dateD.getMinutes()
                  : dateD.getMinutes();
              element.date =
                yearD + "-" + monthD + "-" + dayD + "" + heure + ":" + minute;
              return element;
            });
        })
      )
      .subscribe((result: any) => {
        this.souplesse = result;
        this.updatedSouplesse.next(this.souplesse);
      });
  }
  deleteVitesse(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/vitesse/${id}`
    );
  }
  deleteAerobie(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/aerobie/${id}`
    );
  }
  deleteForce(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/force/${id}`
    );
  }
  deleteSouplesse(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/souplesse/${id}`
    );
  }
  addVitesse(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/vitesse/${id}`,
      data
    );
  }
  addAerobie(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/aerobie/${id}`,
      data
    );
  }
  addForce(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/force/${id}`,
      data
    );
  }
  addSouplesse(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/souplesse/${id}`,
      data
    );
  }
  getIdentity(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/identity/${id}`
    );
  }
  // getPoids(id) {
  //     return this.http.get(`${this.link}/${this.API}/${this.endpoint}/poids/${id}`);
  // }
  // getTension(id) {
  //     return this.http.get(`${this.link}/${this.API}/${this.endpoint}/tension/${id}`);
  // }
  // getTaille(id) {
  //     return this.http.get(`${this.link}/${this.API}/${this.endpoint}/taille/${id}`);
  // }
  // getRepos(id) {
  //     return this.http.get(`${this.link}/${this.API}/${this.endpoint}/repos/${id}`);
  // }
  // getOeilGauche(id) {
  //     return this.http.get(`${this.link}/${this.API}/${this.endpoint}/oeil_gauche/${id}`);
  // }
  // getOeilDroit(id) {
  //     return this.http.get(`${this.link}/${this.API}/${this.endpoint}/oeil_droit/${id}`);
  // }
  // getLabo(id) {
  //     return this.http.get(`${this.link}/${this.API}/${this.endpoint}/labo/${id}`);
  // }
  // getGraisseuse(id) {
  //     return this.http.get(`${this.link}/${this.API}/${this.endpoint}/graisseuse/${id}`);
  // }
  getTraitement(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/playertraitement/${id}`)
      .subscribe((result: any) => {
        this.updatedTraitement.next(result);
      });
  }
  saveTraitement(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addTraitement/${id}`,
      data
    );
  }
  deleteTraitement(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteTraitement/${id}`
    );
  }
  updateTraitement(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateTraitement/${id}`,
      data
    );
  }
  saveEvalution(data, id, phyisqueData = null) {
    data["data"] = phyisqueData;
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/saveEvalution/${id}`,
      data
    );
  }
  deleteEvalution(table, id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/evaluationValues/${table}/id`
    );
  }
  updateEvalution(table, id, data) {
    return this.http.put(
      `${this.link}/${this.API}/${this.endpoint}/evaluationValues/${table}/id`,
      data
    );
  }
  getPlayerTiming(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/playerTiming/${id}`
    );
  }
  getPlayerMatchs(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/_matchs/${id}`
    );
  }
  getPlayerAvertissement(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/avertissement/${id}`
    );
  }
  getInjuryTypes() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getInjuryTypes`)
      .subscribe((result: any) => {
        this.updatedInjuriesTypes.next(result);
      });
  }
  getInjuryType(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/getInjuryType/${id}`
    );
  }
  deleteInjuryType(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteInjuryType/${id}`
    );
  }
  updateInjuryTypes(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateInjuryTypes/${id}`,
      data
    );
  }
  updatePlayerStatus(status: string, id: number) {
    return this.http.post(
      `${this.link}/${this.API}/joueur/updatePlayerStatus/${id}`,
      { status: status }
    );
  }
  addInjuryTypes(data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addInjuryTypes`,
      data
    );
  }
  getPersonnelDoctors(id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/getPersonnelDoctors/${id}`
      )
      .subscribe((result: any) => {
        this.updatedPersonnelDoctors.next(result);
      });
  }
  deletePersonnelDoctor(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deletePersonnelDoctor/${id}`
    );
  }
  updatePersonnelDoctor(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updatePersonnelDoctor/${id}`,
      data
    );
  }
  addPersonnelDoctor(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addPersonnelDoctor/${id}`,
      data
    );
  }
  getPlayerMedicines(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getPlayerMedicines/${id}`)
      .subscribe((result: any) => {
        this.updatedPlayerMedicines.next(result);
      });
  }
  deletePlayerMedicines(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deletePlayerMedicines/${id}`
    );
  }
  updatePlayerMedicines(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updatePlayerMedicines/${id}`,
      data
    );
  }
  addPlayerMedicines(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addPlayerMedicines/${id}`,
      data
    );
  }
  addReathletisation(data, joueur_id, injurie_id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addReathletisation/${joueur_id}/${injurie_id}`,
      data
    );
  }
  getBirthYears() {
    return this.http.get(`${this.link}/${this.API}/player/birth-years`);
  }
  updateReathletisation(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateReathletisation/${id}`,
      data
    );
  }
  getReathletisation(joueur_id, injurie_id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/getReathletisation/${joueur_id}/${injurie_id}`
      )
      .subscribe((result: any) => {
        this.updatedReathletisation.next(result);
      });
  }
  updateVision(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateVision/${id}`,
      data
    );
  }
  updateNotes(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateNotes/${id}`,
      data
    );
  }
  getMedicalNotes(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getMedicalNotes/${id}`)
      .subscribe((result: any) => {
        this.updatedMedicalNotes.next(result);
      });
  }
  deleteMedicalNotes(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteMedicalNotes/${id}`
    );
  }
  updateMedicalNotes(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateMedicalNotes/${id}`,
      data
    );
  }
  addMedicalNotes(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addMedicalNotes/${id}`,
      data
    );
  }
  getAppointements(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getAppointements/${id}`)
      .subscribe((result: any) => {
        this.updatedAppointements.next(result);
      });
  }
  getAllAppointements() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getAllAppointements`)
      .subscribe((result: any) => {
        this.updatedAppointements.next(result);
      });
  }
  deleteAppointements(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteAppointements/${id}`
    );
  }
  updateAppointements(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateAppointement/${id}`,
      data
    );
  }
  addAppointements(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addAppointements/${id}`,
      data
    );
  }
  getPhysiqueTests() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getPhysiqueTests`)
      .subscribe((result: any) => {
        this.updatedPhysiqueTests.next(result);
      });
  }
  deletePhysiqueTests(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deletePhysiqueTests/${id}`
    );
  }
  updatePhysiqueTests(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/physique/updatePhysiqueTests/${id}`,
      data
    );
  }
  addPhysiqueTests(data) {
    return this.http.post(
      `${this.link}/${this.API}/physique/addPhysiqueTests`,
      data
    );
  }
  getGpsFields(option: string, obj: { [key: string]: number[] } = null) {
    this.http
      .post(`${this.link}/${this.API}/joueur/getGpsFields/${option}`, obj)
      .subscribe((result: any) => {
        this.updatedGpsFields.next(result);
      });
  }
  deleteGpsFields(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteGpsFields/${id}`
    );
  }
  updateGpsFields(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateGpsFields/${id}`,
      data
    );
  }
  updateGpsFieldsDesc(id, desc) {
    return this.http.get(
      `${this.link}/${this.API}/joueur/gps-fields-desc/${id}/${desc}`
    );
  }
  getGpsPlayer(id) {
    return this.http.get(
      `${this.link}/${this.API}/joueur/getGpsPlayer/${id}`
    );
  }
  addGpsFields(data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addGpsFields`,
      data
    );
  }
  deletePlayerGpsFields(id: number, type: string, tag: string = null) {
    return this.http.delete(
      `${this.link}/${this.API}/joueur/deletePlayerGpsFields/${type}/${id}${tag ? `/${tag}` : ""
      }`
    );
  }
  savePlayerGpsFields(data, id: number, type: string, tag: string = null) {
    return this.http.post(
      `${this.link}/${this.API}/joueur/savePlayerGpsFields/${type}/${id}${tag ? `/${tag}` : ""
      }`,
      data
    );
  }
  getPlayerGpsFields(type, id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/getPlayerGpsFields/${type}/${id}`
      )
      .subscribe((result: any) => {
        this.updatedPlayerGpsFields.next(result);
      });
  }
  getOnePlayerGpsFields(id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/getOnePlayerGpsFields/${id}`
      )
      .subscribe((result: any) => {
        this.updatedPlayerGpsFields.next(result);
      });
  }
  getGammes() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getGammes`)
      .subscribe((result: any) => {
        this.updatedGammes.next(result);
      });
  }
  deleteGammes(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteGammes/${id}`
    );
  }
  getOnePlayerGps(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/getOnePlayerGps/${id}`
    );
  }
  updateGammes(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateGammes/${id}`,
      data
    );
  }
  addGammes(data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addGammes`,
      data
    );
  }
  getPharmacieMedicaments() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getPharmacieMedicaments`)
      .subscribe((result: any) => {
        this.updatedPharmacieMedicaments.next(result);
      });
  }
  deletePharmacieMedicaments(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deletePharmacieMedicaments/${id}`
    );
  }
  updatePharmacieMedicaments(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updatePharmacieMedicaments/${id}`,
      data
    );
  }
  addPharmacieMedicaments(data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addPharmacieMedicaments`,
      data
    );
  }
  getPhysiqueChildTests() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getPhysiqueChildTests`)
      .subscribe((result: any) => {
        this.updatedPhysiqueChildTests.next(result);
      });
  }
  getPhysiqueTestChildren(id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/getPhysiqueTestChildren/${id}`
      )
      .subscribe((result: any) => {
        this.updatedPhysiqueChildTests.next(result);
      });
  }
  deletePhysiqueChildTests(id) {
    return this.http.delete(
      `${this.link}/${this.API}/physique/deletePhysiqueChildTests/${id}`
    );
  }
  updatePhysiqueChildTests(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/physique/updatePhysiqueChildTests/${id}`,
      data
    );
  }
  addPhysiqueChildTests(data) {
    return this.http.post(
      `${this.link}/${this.API}/physique/addPhysiqueChildTests`,
      data
    );
  }
  getTestPhysique() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/physique_test`
    );
  }
  getPlayerPhysiqueTest(id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/joueur_physique_test/${id}`
      )
      .subscribe((result: any) => {
        this.updatedPlayerPhysiqueTests.next(result);
      });
  }
 
  JoueurPhysiqueChart(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/joueur-physique-chart/${id}`
    );
  }
  addPlayerPhysiqueTests(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/joueur_physique_test/${id}`,
      { data: data }
    );
  }
  updateMatchRisk(id, data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updateMatchRisk/${id}`,
      data
    );
  }
  deletePlayerPhysiqueTests(ids) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/delete_joueur_physique_test`,
      { ids: ids }
    );
  }
  deletePlayerSinglePhysiqueTests(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/delete_joueur_single_physique_test/${id}`
    );
  }
  updatePlayerSinglePhysiqueTests(newValue, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/update_joueur_single_physique_test/${id}`,
      { value: newValue }
    );
  }
  getPlayerVaccins(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/playerVaccins/${id}`)
      .subscribe((result: any) => {
        this.updatedPlayerVaccins.next(result);
      });
  }
  getVaccinsAlerts() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/vaccinsAlerts`
    );
  }
  getPlayersWithVaccins() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/playersWithViccins`
    );
  }
  savePlayerVaccin(data, id, file = null) {
    let request = {
      file: file,
      date: data.date,
      vaccin: data.vaccin,
      done: data.done,
      type_vaccin: data.type_vaccin,
    };
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/playerVaccins/${id}`,
      request
    );
  }
  ListDiagnostic() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/list-diagnostic`
    );
  }
  AddDiagnostic(data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/add-diagnostic`,
      data
    );
  }
  ListMoyensRecuperation() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/list-moyens-recuperation`
    );
  }
  AddMoyensRecuperation(data) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/add-moyens-recuperation`,
      data
    );
  }
  getCountDoms(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/countDoms/${id}`
    );
  }
  listPlayers(id: number = null) {
    return this.http.get(
      `${this.link}/${this.API}/joueur/players${id == null ? "" : `/${id}`}`
    );
  }
  // API: /list-clubs/:type
  // getClubs(type: string): Observable<RESPONCE_ClubJSON> {
  //   return this.http.get<RESPONCE_ClubJSON>(
  //     `${this.link}/${this.API}/club/list-clubs/${type}`
  //   );
  // }
  // getListPlayers(
  //   clubIds: number[],
  //   type: string = "player"
  // ): Observable<PlayerList> {
  //   return this.http.post<PlayerList>(
  //     `${this.link}/${this.API}/joueur/all-players`,
  //     { equipes_ids: clubIds, type: type }
  //   );
  // }
  SavePlayerInfo(playerId, player, brothers = []) {
    let data = {
      pere: player.pere,
      fonction_pere: player.fonction_pere,
      mere: player.mere,
      mere_fonction: player.mere_fonction,
      contact_urgence: player.contact_urgence,
      contact_urgence_tele: player.contact_urgence_tele,
      nomber_freres: player.nomber_freres,
      freres: brothers.map((e) => {
        return [e.nom, e.age, playerId];
      }),
    };
    return this.http.post(
      `${this.link}/${this.API}/joueur/info-update/${playerId}`,
      data
    );
  }
  updatePlayerEquipe(playerId: number, id: number) {
    return this.http.get(
      `${this.link}/${this.API}/joueur/update-equipe/${playerId}/${id}`
    );
  }

  geSubListEquipes() {
    return this.http.get(`${this.link}/${this.API}/joueur/sub-equipes-list`);
  }
  CheckEmail(value) {
    return this.http.post(`${this.link}/${this.API}/joueur/check-email`, {
      email: value,
    });
  }
  GeneratedPassword(
    id: number,
    request: any
  ): Observable<{ [key: string]: any }> {
    return this.http.post<{ [key: string]: any }>(
      `${this.link}/${this.API}/joueur/generated-password/${id}`,
      request
    );
  }
}
