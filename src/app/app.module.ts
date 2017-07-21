import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { Hello99Component } from './hello99/hello99.component';
import { Conditional99Component } from './conditional99/conditional99.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    Hello99Component,
    Conditional99Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
