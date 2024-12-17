import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '@model/story.model';
import { StoryService } from '@service/story.service';

@Component({
  selector: 'app-story-container',
  templateUrl: './story-container.component.html'
})
export class StoryContainerComponent implements OnInit {

  stories$!: Observable<Story[]>;
  loading: boolean = true;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getStories();
    this.stories$.subscribe(() => this.loading = false);
  }

  getStories() {
    this.stories$ = this.storyService.stories$;
    this.storyService.refreshStories();
  }

}
