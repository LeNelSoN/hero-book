import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationBannerComponent } from './creation-banner.component';

describe('CreationBannerComponent', () => {
  let component: CreationBannerComponent;
  let fixture: ComponentFixture<CreationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreationBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
