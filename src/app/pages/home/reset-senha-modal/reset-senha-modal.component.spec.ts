import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSenhaModalComponent } from './reset-senha-modal.component';

describe('ResetSenhaModalComponent', () => {
  let component: ResetSenhaModalComponent;
  let fixture: ComponentFixture<ResetSenhaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetSenhaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSenhaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
