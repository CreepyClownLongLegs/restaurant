import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Reservation } from './reservation/reservation';
import { Menu } from './menu/menu';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path: '', component: Home, title: 'Your Restaurant'},
    {path: 'reservation', component: Reservation, title: 'reserve a table'},
    {path: 'menu', component: Menu, title: 'Your Menu'},
    {path: 'contact', component: Contact, title: 'Your Contact'}
];
