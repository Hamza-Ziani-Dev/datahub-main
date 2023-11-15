import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionFilePipe } from './extension-file.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ExtensionFilePipe
  ],
  declarations: [
    ExtensionFilePipe
  ]
})
export class ExtensionFileModule { }
