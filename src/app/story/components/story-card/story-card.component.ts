import { Component, Input } from '@angular/core';
import { Story } from '@model/story.model';
import { RedirectKey } from 'src/app/core/constant/RedirectKey';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.scss'
})
export class StoryCardComponent {
  @Input() story!: Story;
  RedirectKey = RedirectKey;
}
