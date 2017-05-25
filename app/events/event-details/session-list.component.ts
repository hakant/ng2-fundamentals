import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';

@Component({
    selector: "session-list",
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortSessions(this.sortBy);
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(
                s => s.level.toLocaleLowerCase() === filter
            );
        }
    }

    sortSessions(sort: string) {
        if (sort === 'name') {
            this.visibleSessions.sort((a: ISession, b: ISession) => {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
        }
        if (sort === 'votes') {
            this.visibleSessions.sort((a, b) => {
                return b.voters.length - a.voters.length;
            });
        }
    }
}