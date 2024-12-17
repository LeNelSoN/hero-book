import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { StoryPresenterComponent } from './components/story-presenter/story-presenter.component';
import { StoryContainerComponent } from './components/story-container/story-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoryRoutingModule } from './story-routing.module';

@NgModule({
  declarations: [
    StoryContainerComponent,
    StoryPresenterComponent,
    StoryCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoryRoutingModule
],
  exports: [
    StoryPresenterComponent,
    StoryContainerComponent
  ]
})

export class StoryModule { }
