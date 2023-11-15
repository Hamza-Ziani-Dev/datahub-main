import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { NotificationComponent } from './notification/notification.component';
 import { MatButtonModule } from "@angular/material/button";
 import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [DeleteModalComponent, NotificationComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class WidgetModule {}
