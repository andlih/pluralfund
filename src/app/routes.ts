import { Routes } from '@angular/router';
// import { EventsListComponent } from './events/events-list.component';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
// import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
// import { EventRouteActivator } from './events/event-details/event-route-activator.service';
// import { EventlistResolver } from './events/event-list-resolver.service';
// import { CreateSessionComponent } from './events/event-details/create-session.component';

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventlistResolver,
    CreateSessionComponent
} from './events/index';


export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventlistResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    { path: 'andy', loadChildren: 'app/andy/andy.module#AndyModule' }
];
