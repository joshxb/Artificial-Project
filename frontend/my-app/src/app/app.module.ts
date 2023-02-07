import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './artifial/user/user.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { TransactionsComponent } from './admin/transactions/transactions.component';
import { ActivitiesComponent } from './admin/activities/activities.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { FeedbacksComponent } from './admin/feedbacks/feedbacks.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    TransactionsComponent,
    ActivitiesComponent,
    SettingsComponent,
    FeedbacksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
