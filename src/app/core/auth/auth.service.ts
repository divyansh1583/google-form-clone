import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  user,
  User as FirebaseUser,
  signOut,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  // Observable for template usage
  public readonly user$: Observable<User | null> = user(this.auth).pipe(
    map((firebaseUser) =>
      firebaseUser ? this.mapFirebaseUser(firebaseUser) : null
    )
  );

  // Signal for reactive state management
  public readonly isAuthenticated = signal<boolean>(false);
  public readonly currentUser = signal<User | null>(null);

  constructor() {
    // Listen to auth state changes and handle routing
    onAuthStateChanged(this.auth, (firebaseUser) => {
      if (firebaseUser) {
        const user = this.mapFirebaseUser(firebaseUser);
        this.currentUser.set(user);
        this.isAuthenticated.set(true);

        // Redirect to dashboard if user is on login/register pages
        const currentUrl = this.router.url;
        if (
          currentUrl === '/login' ||
          currentUrl === '/register' ||
          currentUrl === '/' ||
          currentUrl === '/forgot-password'
        ) {
          this.router.navigate(['/dashboard']);
        }
      } else {
        this.currentUser.set(null);
        this.isAuthenticated.set(false);
      }
    });
  }

  async signUp(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async signIn(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
      throw error;
    }
  }
  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email);
    } catch (error) {
      throw error;
    }
  }
  getCurrentUser() {
    return this.auth.currentUser;
  }
  private mapFirebaseUser(firebaseUser: FirebaseUser): User {
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      emailVerified: firebaseUser.emailVerified,
    };
  }
}
