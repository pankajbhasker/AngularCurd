import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
// Routing module for router service
import { AppRoutingModule } from './app-routing.module';
// Forms module
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { ReadersComponent } from './readers/readers.component';
import { ReaderDetailComponent } from './reader-detail/reader-detail.component';
import { ReaderUpdateComponent } from './reader-update/reader-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    ReadersComponent,
    ReaderDetailComponent,
    ReaderUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
