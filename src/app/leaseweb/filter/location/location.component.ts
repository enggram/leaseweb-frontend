import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnChanges {
  
  @Output() filtered = new EventEmitter();
  @Input () locationData: any[];
  location : string;
  constructor() { }

  ngOnInit(): void {
  }

  emitValue(event) {
    this.filtered.emit({ location: event });
  }

  ngOnChanges(): void {
  }
}
