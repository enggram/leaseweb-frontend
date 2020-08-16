import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './../service/api.service';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table/table';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  @ViewChild('appServersList', {static:false}) private appServerListTable: Table;
  datasource: any[];

  servers: any[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

  paramValues: any = {};

  
  constructor(private service: ApiService) {
    this.loading = true;
    this.servers = []
    this.totalRecords = 0;
  }
  

  ngOnInit() {
     this.service.filterParams.subscribe((data) => {
        this.paramValues = data;
        this.appServerListTable.reset();
     });
  }

  loadServers(event: LazyLoadEvent) {
    this.loading = true;
    let page = (event.first)/10+1;
    this.paramValues._page = page;
      this.service.getServerList(this.paramValues).subscribe((data) => {
        this.servers = data.servers;
        this.loading = false;
        this.totalRecords = data.total;
      });
    }
}
