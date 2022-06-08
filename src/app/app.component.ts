import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Exchange } from './models/exchanges';
import { RootObject } from './models/rootobject';
import { Status } from './models/status';
import { ExchangesService } from './services/exchanges.service';
import { ColDef } from 'ag-grid-community';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CryptSwitcher';
  exchanges: any;
  exchangeValues: RootObject;
  cryptoList: Exchange[] = [];
  cryptoValues: Exchange[];
  baseUrl = environment.apiUrl + '/ExChangeRate';

  rowData: Exchange[];

  columnDefs: ColDef[] = [
    { field: 'name', sortable: true, filter: true },
    { field: 'symbol', sortable: true, filter: true },
    { field: 'slug', sortable: true, filter: true},
    { field: 'num_Market_Pairs', sortable: true, filter: true},
    {field: 'date_Added', sortable: true, filter: true}
];

// rowData = [
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxster', price: 72000 }
// ];


  

  constructor(private exchangeService: ExchangesService) {}

  ngOnInit() {
       this.getExchangesValues();  
  }

  getExchangesValues() {
    this.exchangeService.getExchangesRates().subscribe(response => {
      this.exchangeValues = response;
      console.log('responses', this.exchangeValues);
      this.rowData = this.exchangeValues.data;
    }, error => {
      console.log(error);
    });

    console.log('rowData', this.cryptoList);
  }
}
