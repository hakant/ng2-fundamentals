import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,
    VoterService,
    DurationPipe,
    LocationValidator
} from './events/index'

import { 
    TOASTR_TOKEN, 
    Toastr,
    JQ_TOKEN,
    CollapsibleWellComponent,
    SimpleModelComponent,
    ModalTriggerDirective
} from './common/index';
import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModelComponent,
        UpvoteComponent,
        ModalTriggerDirective,
        LocationValidator
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        EventRouteActivator,
        EventListResolver,
        VoterService,
        AuthService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm("Do you really want to cancel?");
    }

    return true;
}