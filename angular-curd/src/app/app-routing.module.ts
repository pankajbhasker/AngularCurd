import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReaderComponent } from './reader/reader.component';
import { ReaderDetailComponent } from './reader-detail/reader-detail.component';
import { ReaderUpdateComponent } from './reader-update/reader-update.component';
import { ReadersComponent } from './readers/readers.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'reader' },
{ path: 'reader', component: ReaderComponent },
{ path: 'reader-detail/:id', component: ReaderDetailComponent },
{ path: 'reader-update/:id', component: ReaderUpdateComponent },
{ path: 'readers', component: ReadersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

