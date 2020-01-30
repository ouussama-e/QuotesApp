import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(private http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  getData(url:String){
    return this.http.get('http://localhost/wordpress/wp-json/wp/v2/'+ url);

  }

}
