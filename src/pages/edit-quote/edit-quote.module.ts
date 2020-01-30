import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditQuotePage } from './edit-quote';

@NgModule({
  declarations: [
    EditQuotePage,
  ],
  imports: [
    IonicPageModule.forChild(EditQuotePage),
  ],
})
export class EditQuotePageModule {}
