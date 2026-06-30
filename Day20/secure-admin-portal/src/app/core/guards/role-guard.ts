import { inject } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router
} from '@angular/router';
import { Auth } from '../../services/auth';


export const roleGuard: CanActivateFn = (

  route: ActivatedRouteSnapshot

) => {

  const authService = inject(Auth);

  const router = inject(Router);

  const requiredRole = route.data['role'];

  const userRole = authService.getRole();

  if (userRole === requiredRole) {

    return true;

  }

  return router.createUrlTree(
    ['/dashboard']
  );

};