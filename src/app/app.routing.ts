import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home';
import { PressComponent } from './pages/press';
import { CreditsComponent } from './pages/credits';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'press', component: PressComponent },
    { path: 'credits', component: CreditsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);