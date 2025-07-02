import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../auth.service';

export const redirectAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    map((user) => {
      if (user) {
        // User is authenticated, redirect to dashboard
        router.navigate(['/dashboard']);
        return false;
      } else {
        // User is not authenticated, allow access to auth pages
        return true;
      }
    })
  );
};
