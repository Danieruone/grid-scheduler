import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// custom
import { GridCalendarModule } from './grid-calendar/grid-calendar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GridCalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
