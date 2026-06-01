import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactMeForm } from './contact-me-form';

describe('ContactMeForm', () => {
  let component: ContactMeForm;
  let fixture: ComponentFixture<ContactMeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactMeForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactMeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
