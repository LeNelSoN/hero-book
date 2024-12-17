import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryContainerComponent } from './components/story-container/story-container.component';

const routes: Routes = [
  { path: '', component: StoryContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }
