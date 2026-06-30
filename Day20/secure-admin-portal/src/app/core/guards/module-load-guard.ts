import { CanActivateFn } from '@angular/router';

export const moduleLoadGuard: CanActivateFn = (route, state) => {
  return true;
};
