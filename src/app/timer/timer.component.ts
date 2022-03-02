import { Component } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  new_time:system_time = new system_time();
  public ngOnInit() {
    setInterval(() => {
      this.time = this.new_time.get_time();
    }, 1000)
  }
  time = this.new_time.get_time();
}

class system_time {
// now interface for formalizing what hours, minutes, seconds, and time is //
public now = {
  hours: '',
  minutes: '',
  seconds: '',
  time: ''
}

// On initializing the component, update get_time() every 1000ms //
// Gets hours, minutes, and seconds from Date(), formats for conciseness, then now.time combines these into a singular string //
public get_time() {
  const date = new Date();

  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? ' PM' : ' AM';

  const formatted_time = this.fix_digits([hours, minutes, seconds]);

  this.now.hours = formatted_time[0];
  this.now.minutes = formatted_time[1];
  this.now.seconds = formatted_time[2];
  this.now.time = this.now.hours + ":" + this.now.minutes + ":" + this.now.seconds + ampm;
  return this.now.time;
}

// Fixes any digit problems in Date() fetch //

public fix_digits(time: any[]): string[] {
  let formatted_time_array = [];

  time.forEach((value) => {
    value = (value < 10) ? '0' + value: value;
    formatted_time_array.push(value);
  })

  return formatted_time_array;
}
}
