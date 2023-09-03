import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreadorPage } from './creador.page';

describe('CreadorPage', () => {
  let component: CreadorPage;
  let fixture: ComponentFixture<CreadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
