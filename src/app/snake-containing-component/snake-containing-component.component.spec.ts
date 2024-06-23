import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeContainingComponentComponent } from './snake-containing-component.component';

describe('SnakeContainingComponentComponent', () => {
  let component: SnakeContainingComponentComponent;
  let fixture: ComponentFixture<SnakeContainingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnakeContainingComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnakeContainingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
