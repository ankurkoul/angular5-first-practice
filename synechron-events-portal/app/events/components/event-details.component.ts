import { Component, Input, Output, EventEmitter, OnChanges, Inject } from "@angular/core";

import { SepEventService } from '../services/sep-events.service';
import { SepEvent } from '../Models/sep.event'

@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})
export class EventDetailsComponent implements OnChanges {
    constructor( @Inject(SepEventService) private _eventService: SepEventService) { }


    ngOnChanges(): void {
        this.event = this._eventService.getSingleEvent(this.eventId);
    }
    title: string = "Details of comp";
    event: SepEvent;
    @Input("receivedEventId") eventId: number;
    @Output("onConfirmation") sendConfirmation: EventEmitter<String> = new EventEmitter<String>();

    onSendConfirmation(): void {
        this.sendConfirmation.emit("received Event");
        console.log('ok')
    }
}