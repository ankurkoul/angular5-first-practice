import { Component, OnInit, Inject } from '@angular/core';
import { SepEvent } from '../Models/sep.event';
import { SepEventService } from '../services/sep-events.service';

@Component({
    selector: 'events-list',
    templateUrl: '../views/events-list.component.html'
})

export class EventListComponent implements OnInit {

    constructor( @Inject(SepEventService) private _eventService: SepEventService) { }

    title: string = "Synechron events list";
    subTitle: string = "Published by Synechron HR";
    childMsg: string = "";
    selectedEvent: SepEvent;
    events: SepEvent[] = [];
    
    ngOnInit() {
        this._eventService.getAllEvents().subscribe(
            data => this.events = data,
            err => console.log(err),
            () => console.log("completed mongo integration")
        );
    }
    onEventSelection(event: SepEvent): void {
        this.selectedEvent = event
    }

    onChildConfirmation(msg: string): void {
        this.childMsg = msg;
    }
  
}