import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { ExperimentsComponent } from './experiments/experiments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrewComponent,
    TechnologyComponent,
    ExperimentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
