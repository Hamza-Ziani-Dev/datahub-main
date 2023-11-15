import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
})
export class NotificationComponent {
  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() color:string;
  @Input() showMs: boolean;
  @Input() btnCancelText: string;
  constructor(private activeModal: NgbActiveModal) {}

  // constructor(public dialogRef: MatDialogRef<NotificationComponent>) {
  //   dialogRef.afterOpened().subscribe((_) => {
  //     setTimeout(() => {}, this.time);
  //   });
  // }

  public decline() {
    this.activeModal.close(false);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
