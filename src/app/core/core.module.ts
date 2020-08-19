import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitializer } from './helpers';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorInterceptor, JwtInterceptor } from './interceptors';
import { MatIconModule } from '@angular/material/icon';
import { AppWrapperModule } from './modules/app-wrapper/app-wrapper.module';
import { DialogModule } from './modules/dialog/dialog.module';

@NgModule({
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    AppWrapperModule,
    DialogModule
  ],
  exports: [
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    AppWrapperModule,
    DialogModule
  ]
})
export class CoreModule { }
