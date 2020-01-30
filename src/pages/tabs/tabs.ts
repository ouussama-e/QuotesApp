import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { QuotesPage } from '../quotes/quotes';
import { QuotesDetailsPage } from '../quotes-details/quotes-details';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = QuotesPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ProfilePage ;
  tab5Root = QuotesDetailsPage;
  tab6Root = HomePage;


  constructor() {

  }
}
