import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoryContainerComponent } from './story-container.component';
import { StoryService } from '@service/story.service';
import { of } from 'rxjs';
import { Story } from '@model/story.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-presenter',
  template: ''
})
class MockStoryPresenterComponent {
  @Input() stories: Story[] = [];
  @Input() loading: boolean = false;
}

describe('StoryContainerComponent', () => {
  let component: StoryContainerComponent;
  let fixture: ComponentFixture<StoryContainerComponent>;
  let mockStoryService: any;

  beforeEach(async () => {
    mockStoryService = {
      stories$: of([
        { title: 'Story 1', description: 'Description 1', links: [] },
        { title: 'Story 2', description: 'Description 2', links: [] }
      ]),
      refreshStories: jasmine.createSpy('refreshStories')
    };

    await TestBed.configureTestingModule({
      declarations: [
        StoryContainerComponent,
        MockStoryPresenterComponent
      ],
      providers: [{ provide: StoryService, useValue: mockStoryService }]
    }).compileComponents();

    fixture = TestBed.createComponent(StoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch stories on initialization', () => {
    component.ngOnInit();
    expect(mockStoryService.refreshStories).toHaveBeenCalled();
  });

  it('should set loading to false after fetching stories', () => {
    component.ngOnInit();
    expect(component.loading).toBeFalse();
  });

  it('should pass loading state to the presenter', () => {
    component.loading = true;
    fixture.detectChanges();

    const mockPresenter = fixture.debugElement.query(
      By.directive(MockStoryPresenterComponent)
    ).componentInstance;

    expect(mockPresenter.loading).toBeTrue();
  });


  it('should pass stories to the presenter component', () => {
    const presenterEl = fixture.debugElement.query(
      By.directive(MockStoryPresenterComponent)
    );
    expect(presenterEl).toBeTruthy();
    expect(presenterEl.componentInstance.stories.length).toBe(2);
  });
});
