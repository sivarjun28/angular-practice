import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {

   console.log(
  'UnsavedChangesGuard executed'
 );
  return component.canDeactivate ? component.canDeactivate() : true;
}