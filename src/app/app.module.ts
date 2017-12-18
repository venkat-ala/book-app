import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination
import { RouterModule } from '@angular/router';
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
    Ng2PaginationModule
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
