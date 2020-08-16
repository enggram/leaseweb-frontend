import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit, OnChanges {

  @Output() filtered = new EventEmitter();
  @Input () ramData: any[];
  ram : string;
  ramDataValue : any[];

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(event) {
    let ramFilter = this.ramDataValue.filter(ram => {
        if(ram.value === true){
          return ram;
        }
    }).map(ram => ram.key).join(',');
    this.filtered.emit({ ram: ramFilter });
  }

  ngOnChanges(): void {
     this.ramDataValue = this.ramData.map(ram => {
      return {
        value: false,
        key : ram,
        display: ram+'GB'
      }
    })
  }
}
