import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 5px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;
}