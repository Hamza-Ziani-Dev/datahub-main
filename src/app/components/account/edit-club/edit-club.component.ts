import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { authService } from 'src/app/components/auth/service/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css']
})
export class EditClubComponent implements OnInit {
  id;
  equipeSub: Subscription;
  club;
  logo = null;
  logo_base64 = null;
  isLoading = [true, false];
  imgURL;
  @ViewChild('clubForm', { static: false }) clubForm: NgForm;
  constructor(private router: Router, private route: ActivatedRoute, private authService: authService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.route.params.subscribe(
      p => {
        this.id = p.id;
      }
    );
    this.equipeSub = this.authService.getEquipe(this.id).subscribe(
      (result: any) => {
        this.club = result;
        this.imgURL = this.club.logo;
        this.isLoading[0] = false;
      }
    );
  }
  // toBase64 =(file) => new Promise((resolve, reject) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => resolve(reader.result);
  //   reader.onerror = error => reject(error);
  //  });
  onChangeImage(event: any) {
    // this.toBase64(event.target.files[0])
    // .then(res => {
    //   this.logo_base64 = res;
    //   this.imgURL = res;
    // })
    // .catch(err => {
    // 	console.log(err);
    // });
    this.logo = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) => {
      this.imgURL = reader.result;
    }
    reader.readAsDataURL(this.logo);
  }
  onSave() {
    this.isLoading[1] = true;
    const controls = Object.values(this.clubForm.controls);
    for (let control of controls) {
      if (control.invalid) {
        this.isLoading[1] = false;
        return;
      }
    }
    this.authService.updateEquipe(this.club, this.id, this.logo);
  }

}
