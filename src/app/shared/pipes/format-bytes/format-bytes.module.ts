import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatBytesPipe } from './format-bytes.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormatBytesPipe],
  exports: [FormatBytesPipe]
})
export class FormatBytesModule { }
