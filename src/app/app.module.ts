import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { SortByPipe } from './sortBy.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule
    RouterModule.forRoot([{
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
