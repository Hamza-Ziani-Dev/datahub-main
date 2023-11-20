import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TrainingService {
  trainings;
  trainingsCount;
  presence;
  documents;
  updatedDocuments = new Subject();
  updatedTrainings = new Subject();
  updatedTrainingsCount = new Subject();
  updatedMediane = new Subject();
  updatedMedianeEntrainement = new Subject();
  updatedPresence = new Subject();
  updatedUnseenFiches = new Subject();
  updatedTrainingsActions = new Subject();
  link;
  API;
  endpoint = "training";
  constructor(private http: HttpClient, private router: Router) {
    this.link = environment.link;
    this.API = environment.API;
  }
  getUpdatedTrainingsActionsListner() {
    return this.updatedTrainingsActions.asObservable();
  }
  getUpdatedTrainingsListner() {
    return this.updatedTrainings.asObservable();
  }
  getUpdatedTrainingsCount() {
    return this.updatedTrainingsCount.asObservable();
  }
  getUpdatedPresenceListner() {
    return this.updatedPresence.asObservable();
  }
  getUpdatedMediane() {
    return this.updatedMediane.asObservable();
  }
  getUpdatedMedianeEntrainement() {
    return this.updatedMedianeEntrainement.asObservable();
  }
  getUpdatedUnseenFichesListner() {
    return this.updatedUnseenFiches.asObservable();
  }
  getMediane(player_id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/getMediane/${player_id}`
      )
      .subscribe((result: any) => {
        this.updatedMediane.next(result);
      });
  }
  getMedianeEntrainement(player_id) {
    this.http
      .get(
        `${this.link}/${this.API}/${this.endpoint}/getMedianeEntrainement/${player_id}`
      )
      .subscribe((result: any) => {
        this.updatedMedianeEntrainement.next(result);
      });
  }
  getTrainings() {
    this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/all`
    ).subscribe(
      (result) => {
        this.trainings = result;
        this.updatedTrainings.next(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getNewTrainings(
    limit: number,
    page: number,
    options: { [value: string]: any } = null
  ) {
    this.http
      .post(
        `${this.link}/${this.API}/${this.endpoint}/new-all?limit=${limit}&page=${page}`
        ,
        {
          options: options,
        }
      )
      .subscribe(
        (result) => {
          this.trainings = result;
          this.updatedTrainings.next(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getTrainingsCount() {
    this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/count`).subscribe(
        (result) => {
          this.trainingsCount = result;
          this.updatedTrainingsCount.next(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getRpeBeforeTraining(id) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/rpeBeforeTraining/${id}`);
  }
  savePlayerThemes(id: number, tId: number, duration: any) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/player-themes/${id}/${tId}`, { duration });
  }
  deletePlayerThemes(id: number, tId: number) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/player-themes/${id}/${tId}`);
  }
  getPlayerThemes(id: number, tId: number) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/player-themes/${id}/${tId}`);
  }
  suiviWhooper(id) {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/suiviWhooper/${id}`);
  }
  getUnseenFiches() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/unseenFiches`)
      .subscribe((result: any) => {
        this.updatedUnseenFiches.next(result);
      });
  }
  seeFiches() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/seeFiches`);
  }
  getRpeAfterTraining(id) {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/rpeAfterTraining/${id}`);
  }
  getChargeCA() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/chargeCA`);
  }
  getPlayerChargeCA(id) {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/joueurChargeCA/${id}`);
  }
  getPlayerDailyCharge(id) {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/joueurDailyCharge/${id}`);
  }
  getPlayerWeeklyCharge(id) {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/joueurWeeklyCharge/${id}`);
  }
  saveRpeAfterTraining(trainingId, playerId, data) {
    return this.http.post(
      `${this.link}/${this.API}/training/updateRpeAfterTraining/` +
      trainingId +
      "/" +
      playerId,
      data
    );
  }
  saveRpeBeforeTraining(trainingId, playerId, data) {
    return this.http.post(
      `${this.link}/${this.API}/training/updateRpeBeforeTraining/` +
      trainingId +
      "/" +
      playerId,
      data
    );
  }
  getPaginatedTrainings(current, max) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/paginated/${current}/${max}`)
      .subscribe(
        (result) => {
          this.trainings = result;
          this.updatedTrainings.next(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getMonthTrainings(month) {
    this.http.get(`${this.link}/${this.API}/${this.endpoint}/month/${month}`).subscribe(
      (result) => {
        this.trainings = result;
        this.updatedTrainings.next(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getEntrainement() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/entrainementStats`);
  }
  getEntrainementTotalStats() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/entrainementTotalStats`);
  }
  addNewTraining(sessionInfo) {
    return this.http.post(`${this.link}/${this.API}/${this.endpoint}/new-add`, sessionInfo);
  }
  addTraining(sessionInfo) {
    return this.http.post(`${this.link}/${this.API}/${this.endpoint}/add`, sessionInfo);
  }
  addTrainingPlan(sessionInfo) {
    return this.http.post(`${this.link}/${this.API}/${this.endpoint}/addPlan`, sessionInfo);
  }
  updateTraining(sessionInfo, id) {
    this.http
      .post(`${this.link}/${this.API}/${this.endpoint}/update/${id}`, sessionInfo)
      .subscribe((result) => {
        if (result) {
          this.router.navigate([`/entrainement/presenceSheet/${id}`]);
        }
      });
  }

  updateTrainingCalander(sessionInfo, id) {
    return this.http.post(`${this.link}/${this.API}/${this.endpoint}/update/${id}`, sessionInfo);
  }
  updateNewTrainingCalander(sessionInfo, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/new-update/${id}`,
      sessionInfo
    );
  }
  deleteTraining(id) {
    return this.http.delete(`${this.link}/${this.API}/${this.endpoint}/delete/${id}`);
  }
  getTraining(id: number, type: string = null) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/one/${id}${[null, undefined].includes(type) ? "" : `/${type}`
      }`
    );
  }
  getNewTraining(id: number, type: string = null) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/new-one/${id}${[null, undefined].includes(type) ? "" : `/${type}`
      }`
    );
  }
  getPresence(id) {
    this.http.get(`${this.link}/${this.API}/${this.endpoint}/presence/${id}`).subscribe(
      (result) => {
        this.presence = result;
        this.updatedPresence.next(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updatePresenceComment(data, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/updatePresenceComment/${id}`,
      { joueur_id: data.joueur_id, comment: data.comment }
    );
  }
  changePresenceStatus(id, trainingId, status) {
    this.http
      .post(`${this.link}/${this.API}/${this.endpoint}/changeStatus/${id}` + "/" + trainingId, {
        status: status,
      })
      .subscribe((result) => {
        if (result) {
          this.getPresence(id);
        }
      });
  }
  changeGrade(id, trainingId, grade) {
    this.http
      .post(`${this.link}/${this.API}/${this.endpoint}/changeGrade/${id}` + "/" + trainingId, {
        grade: grade,
      })
      .subscribe((result) => {
        if (result) {
          this.getPresence(id);
        }
      });
  }
  isAdapte(id, trainingId, adapte) {
    this.http
      .post(`${this.link}/${this.API}/${this.endpoint}/is-adapte/${id}` + "/" + trainingId, {
        adapte,
      })
      .subscribe((result) => {
        if (result) {
          this.getPresence(id);
        }
      });
  }
  getAllFiche() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/allFiche`);
  }
  favoriteExercices() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/favoriteExercices`);
  }
  getFiche(id) {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/fiche/${id}`);
  }
  getSubUsers(id) {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/subUsers/${id}`);
  }
  addUsersToFiche(id, ids) {
    return this.http.post(`${this.link}/${this.API}/${this.endpoint}/addUsersToFiche/${id}`, {
      ids: ids,
    });
  }
  deleteFavoriteExercice(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteFavoriteExercice/${id}`
    );
  }
  addExerciceToFavorite(id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addExerciceToFavorite/${id}`,
      { id: id }
    );
  }
  getLatest() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/latest`);
  }
  getComming() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/comming`);
  }
  getTrainingFiche(id) {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/trainingFiche/${id}`);
  }
  deleteFiche(id) {
    return this.http.delete(`${this.link}/${this.API}/${this.endpoint}/deleteFiche/${id}`);
  }
  updateFiche(training, fiche, id) {
    training.recuperationEffortMinutes =
      training.recuperationEffortMinutes > 9 &&
        training.recuperationEffortMinutes != undefined
        ? training.recuperationEffortMinutes
        : "0" + parseInt(training.recuperationEffortMinutes);
    training.recuperationEffortSecond =
      training.recuperationEffortSecond > 9 &&
        training.recuperationEffortSecond != undefined
        ? training.recuperationEffortSecond
        : "0" + parseInt(training.recuperationEffortSecond);
    training.recuperationMinutes =
      training.recuperationMinutes > 9 &&
        training.recuperationMinutes != undefined
        ? training.recuperationMinutes
        : "0" + parseInt(training.recuperationMinutes);
    training.recuperationSecond =
      training.recuperationSecond > 9 &&
        training.recuperationSecond != undefined
        ? training.recuperationSecond
        : "0" + parseInt(training.recuperationSecond);
    training.dureeMinutes =
      training.dureeMinutes > 9 && training.dureeMinutes != undefined
        ? training.dureeMinutes
        : "0" + parseInt(training.dureeMinutes);
    training.dureeSecond =
      training.dureeSecond > 9 && training.dureeSecond != undefined
        ? training.dureeSecond
        : "0" + parseInt(training.dureeSecond);
    training.effortMinutes =
      training.effortMinutes > 9 && training.effortMinutes != undefined
        ? training.effortMinutes
        : "0" + parseInt(training.effortMinutes);
    training.effortSecond =
      training.effortSecond > 9 && training.effortSecond != undefined
        ? training.effortSecond
        : "0" + parseInt(training.effortSecond);
    let data = new FormData();
    data.append("titre", training.titre);
    data.append("age", training.cat_age);
    data.append("theme", training.theme);
    data.append("secondTheme", training.theme_sc);
    data.append("objectif", training.objectif);
    data.append("number", training.numbre_joueur);
    data.append("visibilite", training.visibilite);
    data.append("materiel", training.materiel);
    data.append("place", training.mise_place);
    data.append("dimensions", training.dimensions);
    data.append("criteres", training.realisation);
    data.append("intensite", training.intensite);
    data.append("img", training.img);
    data.append("serieNumber", training.nombre_series);
    data.append("recuperation", training.nature_recup);
    data.append("repetition", training.repitition);
    data.append("effort", training.effortMinutes + ":" + training.effortSecond);
    data.append("duree", training.dureeMinutes + ":" + training.dureeSecond);
    data.append(
      "dureeRecuperation",
      training.recuperationMinutes + ":" + training.recuperationSecond
    );
    data.append(
      "recuperationEffort",
      training.recuperationEffortMinutes +
      ":" +
      training.recuperationEffortSecond
    );
    data.append("fiche", fiche);
    return this.http.post(`${this.link}/${this.API}/${this.endpoint}/updateFiche/${id}`, data);
  }
  appendFicheToSession(sessionId, ficheId) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/appendFicheToSession/${sessionId}`,
      { ficheId: ficheId }
    );
  }
  deleteFicheFromSession(sessionId, ficheId) {
    return this.http.delete(
      `${this.link}/${this.API}/training/deleteFicheFromSession/` +
      sessionId +
      "/" +
      ficheId
    );
  }
  saveFiche(training, fiche) {
    training.recuperationEffortMinutes =
      training.recuperationEffortMinutes > 9 &&
        training.recuperationEffortMinutes != undefined
        ? training.recuperationEffortMinutes
        : "0" + training.recuperationEffortMinutes;
    training.recuperationEffortSecond =
      training.recuperationEffortSecond > 9 &&
        training.recuperationEffortSecond != undefined
        ? training.recuperationEffortSecond
        : "0" + training.recuperationEffortSecond;
    training.recuperationMinutes =
      training.recuperationMinutes > 9 &&
        training.recuperationMinutes != undefined
        ? training.recuperationMinutes
        : "0" + training.recuperationMinutes;
    training.recuperationSecond =
      training.recuperationSecond > 9 &&
        training.recuperationSecond != undefined
        ? training.recuperationSecond
        : "0" + training.recuperationSecond;
    training.dureeMinutes =
      training.dureeMinutes > 9 && training.dureeMinutes != undefined
        ? training.dureeMinutes
        : "0" + training.dureeMinutes;
    training.dureeSecond =
      training.dureeSecond > 9 && training.dureeSecond != undefined
        ? training.dureeSecond
        : "0" + training.dureeSecond;
    training.effortMinutes =
      training.effortMinutes > 9 && training.effortMinutes != undefined
        ? training.effortMinutes
        : "0" + training.effortMinutes;
    training.effortSecond =
      training.effortSecond > 9 && training.effortSecond != undefined
        ? training.effortSecond
        : "0" + training.effortSecond;
    let data = new FormData();
    data.append("titre", training.titre);
    data.append("age", training.age);
    data.append("theme", training.theme);
    data.append("visibilite", training.visibilite);
    data.append("secondTheme", training.secondTheme);
    data.append("objectif", training.objectif);
    data.append("number", training.number);
    data.append("materiel", training.materiel);
    data.append("place", training.place);
    data.append("dimensions", training.dimensions);
    data.append("criteres", training.criteres);
    data.append("intensite", training.intensite);
    data.append("serieNumber", training.serieNumber);
    data.append("duree", training.dureeMinutes + ":" + training.dureeSecond);
    data.append("effort", training.effortMinutes + ":" + training.effortSecond);
    data.append("recuperation", training.recuperation);
    data.append("repetition", training.repetition);
    data.append(
      "dureeRecuperation",
      training.recuperationMinutes + ":" + training.recuperationSecond
    );
    data.append(
      "recuperationEffort",
      training.recuperationEffortMinutes +
      ":" +
      training.recuperationEffortSecond
    );
    data.append("fiche", fiche);
    return this.http.post(`${this.link}/${this.API}/${this.endpoint}/saveFiche`, data);
  }
  getUpdatedDocumentsListner() {
    return this.updatedDocuments.asObservable();
  }
  getDocuments(id, type) {
    this.http
      .get(`${this.link}/${this.API}/joueur/document/${id}/${type}`)
      .subscribe((result) => {
        this.documents = result;
        this.updatedDocuments.next(result);
      });
  }
  deleteDocument(id) {
    return this.http.delete(`${this.link}/${this.API}/joueur/document/${id}`);
  }
  addDocument(info, id, type, file) {
    let data = new FormData();
    data.append("name", info.name);
    data.append("comment", info.comment);
    data.append("date", info.date);
    data.append("type", type);
    data.append("file", file);
    return this.http.post(`${this.link}/${this.API}/joueur/document/${id}`, data);
  }
  trainingActions(id) {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/training_actions/${id}`)
      .subscribe((result: any) => {
        this.updatedTrainingsActions.next(result);
      });
  }
  deleteTrainingActions(id) {
    return this.http.delete(`${this.link}/${this.API}/${this.endpoint}/training_actions/${id}`);
  }
  addTrainingActions(info, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/training_actions/${id}`,
      info
    );
  }
  updateDure(data: any[], id: number) {
    return this.http.post(`${this.link}/${this.API}/${this.endpoint}/update-dure/${id}`, data);
  }
  updateTrainingActions(info, id) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/update_training_actions/${id}`,
      info
    );
  }
  notifierUnansweredTranings() {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/cominganswer`
    );
  }
  getTrainingFilters() {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/new-all-filters`);
  }
  updateIntensiteByAVG(id: number, avg: number) {
    return this.http.get(
      `${this.link}/${this.API}/${this.endpoint}/update-intensite-avg/${id}/${avg}`
    );
  }
  insertPlayersConvoquer(
    REQUEST: { [key: number]: number },
    id: number
  ): Observable<boolean> {
    return this.http.post<boolean>(
      `${this.link}/${this.API}/${this.endpoint}/insert-players-convoquer/${id}`,
      REQUEST
    );
  }

  UploadFile(File: File) {
    const request = new FormData();
    request.append("file", File);
    const req = new HttpRequest(
      "POST",
      `${this.link}/${this.API}/analyse-video/upload`,
      request,
      {
        reportProgress: true,
        responseType: "json",
      }
    );
    return this.http.request(req);
  }
}
