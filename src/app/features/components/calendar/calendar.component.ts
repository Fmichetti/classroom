import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  currentDate: moment.Moment = moment();
  calendarData: any[][] = [];

  // Example events, replace with your actual events data
  events: any[] = [
    { date: moment().startOf('month').add(3, 'days'), color: '#ff5733' },
    { date: moment().startOf('month').add(7, 'days'), color: '#33ff57' },
    // Add more events as needed
  ];

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const startOfMonth = this.currentDate.clone().startOf('month').startOf('week');
    const endOfMonth = this.currentDate.clone().endOf('month').endOf('week');

    const calendarRows = [];
    let currentDay = startOfMonth.clone();

    while (currentDay.isBefore(endOfMonth)) {
      const week = Array(7).fill(0).map(() => {
        const day = {
          date: currentDay.clone(),
          isCurrentMonth: currentDay.month() === this.currentDate.month(),
          isToday: currentDay.isSame(moment(), 'day'),
          events: this.getEventsForDay(currentDay.clone()),
        };
        currentDay.add(1, 'day');
        return day;
      });
      calendarRows.push(week);
    }

    this.calendarData = calendarRows;
  }

  getEventsForDay(date: moment.Moment) {
    return this.events.filter(event => event.date.isSame(date, 'day'));
  }

  nextMonth() {
    this.currentDate.add(1, 'month');
    this.generateCalendar();
  }

  prevMonth() {
    this.currentDate.subtract(1, 'month');
    this.generateCalendar();
  }
}
