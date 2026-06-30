import { Routes } from '@angular/router';
import { ProductList } from './features/practice-1-product-list/components/product-list/product-list';
import { Dashboard } from './features/practice-2-dashboard/components/dashboard/dashboard';
import { TodoList } from './features/practice-3-todo-onpush/components/todo-list/todo-list';
import { DefaultList } from './features/practice-4-performance-audit/before/default-list/default-list';
import { OptimizedList } from './features/practice-4-performance-audit/after/optimized-list/optimized-list';

export const routes: Routes = [
    {
        path: '',
        component: ProductList
    },
    {
        path: 'product-list',
        component: ProductList
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'todos',
        component: TodoList
    },
    {
        path: 'default',
        component: DefaultList
    },
    {
        path: 'optimised',
        component: OptimizedList
    }
    
];
