import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import {ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
    // tslint:disable-next-line:component-selector
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <events-thumbnail [event]="event"></events-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
  events: IEvent[];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // &this.eventService.getEvents().subscribe(events => { this.events = events; });
    this.events = this.route.snapshot.data['events'];
  }
}
