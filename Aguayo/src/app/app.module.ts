
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Imposta qui le tue api key
     AgmCoreModule.forRoot({apiKey: 'AIzaSyDJKdjTywY69M0Ubh4CxbKRRC65jFmxJkw'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
