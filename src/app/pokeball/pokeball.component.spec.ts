import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballComponent } from './pokeball.component';

describe('PokeballComponent', () => {
  let component: PokeballComponent;
  let fixture: ComponentFixture<PokeballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeballComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
