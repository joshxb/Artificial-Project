import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './artifial/user/user.component';
import { LoginComponent } from './artifial/login/login.component';
import { RegistrationComponent } from './artifial/registration/registration.component';
import { LandingComponent } from './artifial/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
