import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class PhysiqueService {
  link: string;
  API = "";
  endpoint = "physique";
  updatedDatabasePlayerPhysiqueTests = new Subject();
  updatedPhysiqueTests = new Subject();
  updatedPlayerPhysiqueTests = new Subject();
  constructor(private http: HttpClient) {
    this.link = environment.link;
    this.API = environment.API;

  }
  getUpdatedPhysiqueTestsListner() {
    return this.updatedPhysiqueTests.asObservable();
  }
  getUpdatedPlayerPhysiqueTestsListner() {
    return this.updatedPlayerPhysiqueTests.asObservable();
  }
  getUpdatedDatabasePlayerPhysiqueTestsListner() {
    return this.updatedDatabasePlayerPhysiqueTests.asObservable();
  }
  deletePlayerPhysiqueTests(ids) {
    return this.http.post(
      `${this.link}/${this.API}/joueur/delete_joueur_physique_test`,
      { ids: ids }
    );
  }
  deletePlayerSinglePhysiqueTests(id) {
    return this.http.delete(
      `${this.link}/${this.API}/${this.endpoint}/deleteJoueurPhysiqueTest/${id}`
    );
  }
  deleteEvalution(table, id) {
    return this.http.delete(`${this.link}/${this.API}/${this.endpoint}/deleteEvalution/${id}`);
  }
  updatePlayerSinglePhysiqueTests(newValue, id) {
    return this.http.post(
      `${this.link}/${this.API}/joueur/update_joueur_single_physique_testNew/${id}`,
      { value: newValue }
    );
  }
  saveEvalution(data, id, phyisqueData = null) {
    data["data"] = phyisqueData;
    return this.http.post(`${this.link}/${this.API}/${this.endpoint}/saveEvalution/${id}`, data);
  }
  getAllEvalution(id) {
    return this.http.get(`${this.link}/${this.API}/${this.endpoint}/allEvalutions/${id}`);
  }
  updateOneEvalution(value, id) {
    return this.http.post(`${this.link}/${this.API}/${this.endpoint}/updateEvalution/${id}`, {
      value: value,
    });
  }
  saveColictivePhysique(requeste) {
    return this.http.post(
      `${this.link}/${this.API}/${this.endpoint}/addColictivePhysique_new`,
      requeste
    );
  }
  getPlayerPhysiqueTest(id) {
    this.http
      .get(`${this.link}/${this.API}/joueur/joueur_physique_test/${id}`)
      .subscribe((result: any) => {
        this.updatedPlayerPhysiqueTests.next(result);
      });
  }
  getTestPhysique() {
    return this.http.get(`${this.link}/${this.API}/joueur/physique_test`);
  }
  addPlayerPhysiqueTests(id, data) {
    return this.http.post(`${this.link}/${this.API}/joueur/joueur_physique_test/${id}`, {
      data: data,
    });
  }
  getPhysiqueTests() {
    this.http
      .get(`${this.link}/${this.API}/${this.endpoint}/getPhysiqueTests`)
      .subscribe((result: any) => {
        this.updatedPhysiqueTests.next(result);
      });
  }
  getPlayerPhysiqueTestDatabase(id) {
    this.http
      .get(
        `${this.link}/${this.API}/joueur/database-joueur-physique-test/${id}`
      )
      .subscribe((result: any) => {
        this.updatedDatabasePlayerPhysiqueTests.next(result);
      });
  }
}
