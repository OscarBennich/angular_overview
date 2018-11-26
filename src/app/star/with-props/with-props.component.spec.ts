import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithPropsComponent } from './with-props.component';

describe('WithPropsComponent', () => {
  let component: WithPropsComponent;
  let fixture: ComponentFixture<WithPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
