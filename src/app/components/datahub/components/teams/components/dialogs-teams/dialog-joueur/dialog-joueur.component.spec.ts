import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogJoueurComponent } from './dialog-joueur.component';

describe('DialogJoueurComponent', () => {
  let component: DialogJoueurComponent;
  let fixture: ComponentFixture<DialogJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
