import { TimerComponent } from './timer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { TimerRoutingModule } from './timer-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerRoutingModule
  ],
  declarations: [TimerComponent]
})
export class TimerModule {}
