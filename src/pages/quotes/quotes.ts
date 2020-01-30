import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {


  quotes : any = [];
  constructor(private dataService: DataProvider) {
    this.dataService.getData('quotes').subscribe(data =>{
      console.log(data);
      this.quotes = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

}
