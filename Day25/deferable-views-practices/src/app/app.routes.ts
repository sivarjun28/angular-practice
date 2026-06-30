import { Routes } from '@angular/router';
import { ProductComponent } from './practice1-ecommerce/product/product';
import { Article } from './practice2-articlepage/article/article';
import { AdminDashboard } from './practice3-admindashboard/admin-dashboard/admin-dashboard';
import { SocialFeed } from './practice4-social-feed/social-feed/social-feed';

export const routes: Routes = [
    {
        path:'',
        component: ProductComponent
    },
    {
        path:'article',
        component: Article
    },
    {
        path:'product',
        component: ProductComponent
    },
    {
        path:'admin-dashboard',
        component: AdminDashboard
    },
    {
        path:'social-feed',
        component: SocialFeed
    }
];
