import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  urll = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDD1xdeorc23ZIQWrapk8OF-XMo-aBmfR8&cx=007751619407156972941:todaeusxax4&q=';

  items = null;

  searchText = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {}

  showResults(event){
    if(event.key === "Enter") {
      this.http.get(this.urll+"economically+friendly+"+this.searchText.replace(' ', '+')).subscribe(x => {
        this.items = x['items'];
      });
    }
  }

}
