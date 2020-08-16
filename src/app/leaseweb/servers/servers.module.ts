import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import { ServersComponent } from './servers.component';


@NgModule({
  declarations: [
    ServersComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    ServersComponent
  ]
})
export class ServersModule { }
