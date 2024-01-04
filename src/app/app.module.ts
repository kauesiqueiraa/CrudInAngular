import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewThoughtComponent } from './components/thougths/new-thought/new-thought.component';
import { FormsModule } from '@angular/forms';
import { ListThoughtComponent } from './components/thougths/list-thought/list-thought.component';
import { ThoughtComponent } from './components/thougths/thought/thought.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
