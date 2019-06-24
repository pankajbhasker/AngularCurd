import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
// Routing module for router service
import { AppRoutingModule } from './app-routing.module';
// Forms module
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatToolbarModule, MatIconModule, MatListModule, MatMenuModule, MatRippleModule, MatTabsModule,
  MatGridListModule, MatButtonToggleModule, MatProgressSpinnerModule, MatSliderModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { ReadersComponent } from './readers/readers.component';
import { ReaderDetailComponent } from './reader-detail/reader-detail.component';
import { ReaderUpdateComponent } from './reader-update/reader-update.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PhoneformatPipe } from './pipes/phoneformat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    ReadersComponent,
    ReaderDetailComponent,
    ReaderUpdateComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PhoneformatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, MatIconModule, MatListModule, MatMenuModule, MatRippleModule,
    MatTabsModule, MatGridListModule, MatButtonToggleModule, MatProgressSpinnerModule, MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
