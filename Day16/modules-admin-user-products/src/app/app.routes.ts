import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home } from './home/home';
export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./modules/admin/admin-module')
                .then(m => m.AdminModule)

    },
    {
        path: 'user',
        loadChildren: () =>
            import('./modules/user/user-module')
                .then(m => m.UserModule)
    },
    {
        path: 'product',
        loadChildren: () =>
            import('./modules/products/products-module')
                .then(m => m.ProductsModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
