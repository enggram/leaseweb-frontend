import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  constructor(private service: ApiService) {}
  filterParams = {};
  clear = false;
  filterData : any = {location: [], ram: [], hddType: []};
  
  ngOnInit() {
    this.service.getFiltersList().subscribe((data) => {
      this.filterData = data;
    });
  }
  getFilterData(filter) {
    this.filterParams = { ...this.filterParams, ...filter };
    this.service.filterParams.next(this.filterParams);
  }
}
