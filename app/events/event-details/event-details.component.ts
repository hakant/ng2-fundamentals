import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl:
    '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px; }
        .event-image { height: 100px }
        a { cursor: pointer; }
    `]
})
export class EventDetailsComponent {
    public event: IEvent;
    addMode: boolean;
    filterBy: string = "all";
    sortBy: string = 'votes';

    constructor(
        private eventService: EventService, 
        private activatedRoute: ActivatedRoute,
        private route: ActivatedRoute) { }

    ngOnInit() {
        // We're subscribing to the params observable. 
        // When route parameters change, this method will be called.
        this.activatedRoute.data.forEach((data: any) => {

            this.event = data['event'];
            this.addMode = false;
                
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe(event => {
            this.addMode = false;
        });
    }

    cancelNewSession() {
        this.addMode = false;
    }
}