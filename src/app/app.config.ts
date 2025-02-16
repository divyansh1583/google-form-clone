import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'form-clone-6d650',
        appId: '1:1019476504991:web:3e77f3a478869a2f578daa',
        storageBucket: 'form-clone-6d650.firebasestorage.app',
        apiKey: 'AIzaSyDCIlS-OX3AXpoMvagVlXlg2_lPccspEco',
        authDomain: 'form-clone-6d650.firebaseapp.com',
        messagingSenderId: '1019476504991',
        measurementId: 'G-DYE8XMDMVR',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
