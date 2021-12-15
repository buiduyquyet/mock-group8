import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Covid19Service } from './service/covid19.service';
import { WorldComponent } from './world/world.component';
@NgModule({
  declarations: [AppComponent, WorldComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [Covid19Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
