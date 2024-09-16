import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

/* Story */
import { StoryListComponent } from './features/story-list/story-list.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
