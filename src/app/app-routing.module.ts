import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Story */
import { StoryListComponent } from './features/story-list/story-list.component';

const routes: Routes = [
  { path: '', component: StoryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
