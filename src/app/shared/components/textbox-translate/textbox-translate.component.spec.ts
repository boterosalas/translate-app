import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxTranslateComponent } from './textbox-translate.component';

describe('TextboxTranslateComponent', () => {
  let component: TextboxTranslateComponent;
  let fixture: ComponentFixture<TextboxTranslateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextboxTranslateComponent]
    });
    fixture = TestBed.createComponent(TextboxTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
