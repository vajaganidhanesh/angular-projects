import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { NewItemComponent } from './components/new-item/new-item.component';

@NgModule({
  declarations: [AppComponent, ViewDataComponent, NewItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
