import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Psycotherapy } from './psycotherapy';

describe('Psycotherapy', () => {
  let component: Psycotherapy;
  let fixture: ComponentFixture<Psycotherapy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Psycotherapy],
    }).compileComponents();

    fixture = TestBed.createComponent(Psycotherapy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
