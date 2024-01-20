import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { NavComponent } from './nav/nav.component';

import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  // Other routes
  { path:'nav', component: NavComponent }, // Replace NextPageComponent with your actual component
  { path:'', component: WebComponent },
  // Other routes
];

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    NavComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
