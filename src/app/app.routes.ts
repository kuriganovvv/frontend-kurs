import { Routes } from '@angular/router';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';

export const routes: Routes = [
  { path: '', component: MovieSearchComponent },
  { path: 'favorites', component: FavoritesListComponent },
  { path: '**', redirectTo: '' }
];
