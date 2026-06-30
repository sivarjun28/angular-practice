import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Movies } from './movies/movies';
import { Settings } from './settings/settings';
import { Trending } from './trending/trending';
import { Watchlist } from './watchlist/watchlist';
import { Profile } from './profile/profile';
import { NotFound } from './not-found/not-found';
export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'movies',
        component: Movies
    },
    {
        path: 'trending',
        component: Trending

    },
    {
        path: 'watchlist',
        component: Watchlist
    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'settings',
        component: Settings
    },
    {
        path: '**',
        component: NotFound
    }
];
