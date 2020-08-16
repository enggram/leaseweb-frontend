import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-disk',
  templateUrl: './disk.component.html',
  styleUrls: ['./disk.component.css']
})
export class DiskComponent implements OnInit {

  rangeValues: number[] = [0,1];
  @Output() filtered = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(event) {
    this.filtered.emit({ hddMin: event.values[0], hddMax: event.values[1] });
  }

}
