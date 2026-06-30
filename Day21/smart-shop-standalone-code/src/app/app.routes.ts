import { Routes } from '@angular/router';

export const routes: Routes = [

{
path:'',
redirectTo:'dashboard',
pathMatch:'full'
},

{
path:'dashboard',

loadComponent:()=>import('./features/dashboard/dashboard')

.then(c=>c.Dashboard)
},

{
path:'login',

loadComponent:()=>import('./features/auth/login/login')

.then(c=>c.Login)
},

{
path:'products',

loadComponent:()=>import('./features/products/product-list/product-list')

.then(c=>c.ProductList)
},

{
path:'todos',

loadComponent:()=>import('./features/todos/todo-list/todo-list')

.then(c=>c.TodoList)
},

{
path:'blog',

loadComponent:()=>import('./features/blog/post-list/post-list')

.then(c=>c.PostList)
},

{
path:'profile',

loadComponent:()=>import('./features/profile/profile')

.then(c=>c.Profile)
},

{
path:'settings',

loadComponent:()=>import('./features/settings/settings')

.then(c=>c.Settings)
},

{
path:'admin',

loadComponent:()=>import('./features/admin/admin')

.then(c=>c.Admin)
}

];