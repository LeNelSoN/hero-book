import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPresenterComponent } from './story-presenter.component';
import { Component, Input } from '@angular/core';
import { Story } from '@model/story.model';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-story-card',
  template: ''
})
class MockStoryCardComponent {
  @Input() story!: Story;
}

describe('StoryPresenterComponent', () => {
  let component: StoryPresenterComponent;
  let fixture: ComponentFixture<StoryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryPresenterComponent, MockStoryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a loader when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();

    const loaderElement = fixture.debugElement.query(By.css('.loader'));
    expect(loaderElement.nativeElement.textContent).toContain('...loading');
  });

  it('should not display a loader when loading is false', () => {
    component.loading = false;
    fixture.detectChanges();

    const loaderElement = fixture.debugElement.query(By.css('.loader'));
    expect(loaderElement).toBeFalsy();
  });


  it('should display the correct number of story cards when loading is false', () => {
    component.loading = false;
    component.stories = [
      { title: 'Story 1', description: 'Description 1', links: [] },
      { title: 'Story 2', description: 'Description 2', links: [] }
    ];
    fixture.detectChanges();

    const storyCards = fixture.debugElement.queryAll(By.directive(MockStoryCardComponent));
    expect(storyCards.length).toBe(2);
  });

  it('should pass the correct story to each story card', () => {
    component.loading = false;
    component.stories = [
      { title: 'Story 1', description: 'Description 1', links: [] },
      { title: 'Story 2', description: 'Description 2', links: [] }
    ];
    fixture.detectChanges();

    const storyCards = fixture.debugElement.queryAll(By.directive(MockStoryCardComponent));
    expect(storyCards[0].componentInstance.story).toEqual(component.stories[0]);
    expect(storyCards[1].componentInstance.story).toEqual(component.stories[1]);
  });

});
