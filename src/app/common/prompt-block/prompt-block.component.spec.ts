import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptBlockComponent } from './prompt-block.component';

describe('PromptBlockComponent', () => {
  let component: PromptBlockComponent;
  let fixture: ComponentFixture<PromptBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
