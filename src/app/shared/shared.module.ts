import { LimitLettersPipe } from './../pipes/limit-letters.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';



@NgModule({
  declarations: [
    LimitLettersPipe,
    LoadingScreenComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    LimitLettersPipe,
    LoadingScreenComponent
  ]
})
export class SharedModule { }
