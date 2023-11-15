import { Directive, ElementRef, OnInit, Renderer2, Input } from "@angular/core";
// import { NgControl } from "@angular/forms";
// import * as ranges from "./ranges";

@Directive({
  selector: "[multiHandleRangeSlider]",
})
export class RangeslideDirective implements OnInit {
  @Input("defaultValues") defaultValues;
  @Input("relevantValues") relevantValues;
  @Input("oldSelectionValues") oldSelectionValues;
  @Input("newSelectionValues") newSelectionValues;
  position_min = 0;
  position_max = 0;
  currentValue = 0;
  _defaultValues = { min: 0, max: 0 };
  _relevantValues = { min: 0, max: 0 };
  _oldSelectionValues = { min: 0, max: 0 };
  _newSelectionValues = { min: 0, max: 0 };

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2 //private control: NgControl
  ) { }

  ngOnInit() {

  }
}
