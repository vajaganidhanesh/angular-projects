import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { crudOperation } from '../services/crudoperations.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

@NgModule({
  declarations: [AppComponent, LoaderComponent, ItemDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [crudOperation],
  bootstrap: [AppComponent],
})
export class AppModule {}
