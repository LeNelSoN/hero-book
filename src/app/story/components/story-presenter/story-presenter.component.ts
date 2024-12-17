import { Component, Input } from '@angular/core';
import { Story } from '@model/story.model';

@Component({
  selector: 'app-story-presenter',
  templateUrl: './story-presenter.component.html',
  styleUrl: './story-presenter.component.scss'
})
export class StoryPresenterComponent {
  @Input() stories: Story[] = [];
  @Input() loading: boolean = true;
}
