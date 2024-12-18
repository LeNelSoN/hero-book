import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkActionComponent } from './link-action.component';

describe('LinkActionComponent', () => {
  let component: LinkActionComponent;
  let fixture: ComponentFixture<LinkActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
