import { LocationComponent } from './location/location.component';
import { DisktypeComponent } from './disktype/disktype.component';
import { DiskComponent } from './disk/disk.component';
import { RamComponent } from './ram/ram.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';


@NgModule({
  declarations: [
    FilterComponent,
    RamComponent,
    DiskComponent,
    DisktypeComponent,
    LocationComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    SliderModule
  ],
  exports: [
    FilterComponent,
    RamComponent,
    DiskComponent,
    DisktypeComponent,
    LocationComponent
  ]
})
export class FilterModule { }
