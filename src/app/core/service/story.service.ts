import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiEndPoints } from 'src/app/core/constant/ApiEndPoints';
import { Story } from '@model/story.model';
import { StoryAdapter } from '../helper/story.adapter';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private storiesSubject = new BehaviorSubject<Story[]>([]);
  public stories$ = this.storiesSubject.asObservable();

  constructor(private http: HttpClient, private storyAdapter: StoryAdapter) {}

  private getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(ApiEndPoints.GET_STORY).pipe(
      map((data: any) => data._embedded.stories),
      map((data: any) => data.map((story: any) => this.storyAdapter.adapt(story))),
      tap((stories: Story[]) => {
        this.storiesSubject.next(stories);
      })
    );
  }

  refreshStories(): void {
    this.getStories().subscribe();
  }
}

