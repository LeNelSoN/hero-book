import { Injectable } from '@angular/core';
import { Story } from '@model/story.model';

@Injectable({
  providedIn: 'root',
})
export class StoryAdapter {
  adapt(apiStory: any): Story {
    return {
      title: apiStory.title,
      description: apiStory.description,
      links: apiStory._links.next ? this.adaptIsAnArray(apiStory._links.next) : [],
    };
  }

  adaptIsAnArray(links: any) {
    if (Array.isArray(links)) {
      return links;
    } else {
      return [links];
    }
  }
}
