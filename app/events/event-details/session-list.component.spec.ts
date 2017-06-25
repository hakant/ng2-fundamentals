import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(
            mockAuthService, 
            mockVoterService
            );
    });

    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {

            component.sessions = [
                {name: 'Session 1', level: 'intermediate'},
                {name: 'Session 2', level: 'intermediate'},
                {name: 'Session 3', level: 'beginner'}
            ] as ISession[];

            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

        });
    });
});