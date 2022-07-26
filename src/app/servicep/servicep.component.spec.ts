import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicepComponent } from './servicep.component';

describe('ServicepComponent', () => {
  let component: ServicepComponent;
  let fixture: ComponentFixture<ServicepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
