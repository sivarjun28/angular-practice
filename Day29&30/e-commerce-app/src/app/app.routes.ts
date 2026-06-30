import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { adminGuard } from './core/guards/admin-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },


  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/product-list/product-list')
        .then(p => p.ProductList)
  },

  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/products/product-detail/product-detail')
        .then(m => m.ProductDetail)
  },


  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart-page/cart-page')
        .then(m => m.CartPage)
  },

  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout-form/checkout-form')
        .then(m => m.CheckoutForm),
    canActivate: [authGuard]
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register')
        .then(m => m.Register)
  },

  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard')
            .then(m => m.Dashboard)
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./features/admin/manage-products/manage-products')
            .then(m => m.ManageProducts)
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./features/admin/manage-orders/manage-orders')
            .then(m => m.ManageOrders)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];