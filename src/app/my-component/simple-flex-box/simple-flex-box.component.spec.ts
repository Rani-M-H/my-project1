import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFlexBoxComponent } from './simple-flex-box.component';

describe('SimpleFlexBoxComponent', () => {
  let component: SimpleFlexBoxComponent;
  let fixture: ComponentFixture<SimpleFlexBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFlexBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleFlexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
