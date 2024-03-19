import { Routes } from '@angular/router';
import { HommeComponent } from './pages/homme/homme.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: "", component: HommeComponent },
    { path: "contato", component: ContactComponent },
    { path: "sobre", component: AboutComponent }
];
