import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadingRoom } from './reading-room';

describe('ReadingRoom', () => {
  let component: ReadingRoom;
  let fixture: ComponentFixture<ReadingRoom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingRoom],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadingRoom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
