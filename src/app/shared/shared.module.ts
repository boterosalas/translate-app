import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxTranslateComponent } from './components/textbox-translate/textbox-translate.component';



@NgModule({
  declarations: [
    TextboxTranslateComponent
  ],
  exports: [
    TextboxTranslateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
