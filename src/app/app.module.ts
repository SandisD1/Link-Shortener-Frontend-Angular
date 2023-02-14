import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShortenerComponent} from './shortener/shortener.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    ShortenerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
    ClipboardModule,
    MatGridListModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
