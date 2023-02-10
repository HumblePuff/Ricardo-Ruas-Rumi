import { SpinnerComponent } from './../components/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    SpinnerComponent,
  ],
  imports: [
    NgxSpinnerModule.forRoot({ type: 'ball-beat' }),
  ],
  exports: [
    SpinnerComponent
  ],
})
export class SharedModule { }
