import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericSection } from './generic-section';

describe('GenericSection', () => {
  let component: GenericSection;
  let fixture: ComponentFixture<GenericSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericSection],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
