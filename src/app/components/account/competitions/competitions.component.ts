import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  isLoading = [true, false];
  competitionSub: Subscription;
  competitions;
  isAdd = false;
  competition = {
    name: '',
    yellow_card: ''
  };
  @ViewChild('competitionForm', { static: false }) competitionForm: NgForm;
  constructor() { }

  ngOnInit(): void {

  }
  deleteCompetition(id) {

  }
  updateCompetition(id) {
    let competition = this.competitions.find(element => element.id == id);
    if (competition.name == '' || competition.name == null || competition.name == 'null' || competition.name.length < 1 || competition.yellow_card == '' || competition.yellow_card == null || competition.yellow_card == 'null' || competition.yellow_card.length < 1) {
      return false;
    }

  }
  showAdd() {
    this.isAdd = true;
  }
  close() {
    this.isAdd = false;
  }

  onSave() {
    this.isLoading[1] = true;
    // checking if the form is valid
    const controls = Object.values(this.competitionForm.controls);
    for (let control of controls) {
      if (control.invalid) {
        this.isLoading[1] = false;
        return;
      }
    }

  }
}
