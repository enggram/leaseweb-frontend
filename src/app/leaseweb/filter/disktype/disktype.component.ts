import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-disktype',
  templateUrl: './disktype.component.html',
  styleUrls: ['./disktype.component.css']
})
export class DisktypeComponent implements OnInit, OnChanges {

  @Output() filtered = new EventEmitter();
  @Input () diskTypeData: any[];
  hddType: string;

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(event) {
    this.filtered.emit({ hddType: event });
  }

  ngOnChanges(): void {
   
  }

}
