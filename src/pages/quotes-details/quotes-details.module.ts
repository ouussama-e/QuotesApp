import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotesDetailsPage } from './quotes-details';

@NgModule({
  declarations: [
    QuotesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotesDetailsPage),
  ],
})
export class QuotesDetailsPageModule {}
