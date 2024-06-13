import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../../Enums/Role.enum';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  const role = Role.admin;

  if (
    localStorage.getItem('role') !== null &&
    localStorage.getItem('role') == role
  ) {
    return true;
  } else {
    _Router.navigate(['/auth']);
    return false;
  }
};
