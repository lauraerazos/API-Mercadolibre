import {Routes} from '@angular/router';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
    {path: 'search', component: SearchComponent},
    {path: '', pathMatch:'full', redirectTo: 'search'},
    {path: '**', pathMatch:'full', redirectTo: 'search'}
];