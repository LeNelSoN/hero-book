import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCardComponent } from './story-card.component';
import { Story } from '@model/story.model';
import { Component, Input } from '@angular/core';
import { Link } from '@model/link.model';
import { RedirectKey } from '@constant/RedirectKey';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'link-action',
  template: ''
})
class MockLinkActionComponent {
  @Input() link!: Link;
  @Input() selectedRedirection!: RedirectKey;
}

describe('StoryCardComponent', () => {
  let component: StoryCardComponent;
  let fixture: ComponentFixture<StoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryCardComponent, MockLinkActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const mockStory: Story = {
      title: "Title",
      description: "Description",
      links: []
    };

    component.story = mockStory;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('[data-testid="story-title"]')).nativeElement;
    expect(titleElement.textContent).toContain(mockStory.title);
  });

  it('should render description', () => {
    const mockStory : Story = {
      title: "Title",
      description: "Description",
      links: []
    }

    component.story = mockStory;
    fixture.detectChanges();

    const descriptionElement = fixture.debugElement.query(By.css('[data-testid="story-description"]')).nativeElement;
    expect(descriptionElement.textContent).toContain(mockStory.description);

  });

  it('should render links', () => {
    const mockStory : Story = {
      title: "Title",
      description: "Description",
      links: [
        {
          title: "Link 1",
          href: "http://link1.com",
          type: "GET"
        },
        {
          title: "Link 2",
          href: "http://link2.com",
          type: "GET"
        }
      ]
    }

    component.story = mockStory;

    fixture.detectChanges();

    const links = fixture.debugElement.queryAll(By.directive(MockLinkActionComponent));

    expect(links.length).toEqual(mockStory.links.length);

    for (let i = 0; i < links.length; i++) {
      expect(links[i].componentInstance.link).toEqual(mockStory.links[i]);
    }

  });
});
