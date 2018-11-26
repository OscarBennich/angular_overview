import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPropsComponent } from './no-props.component';

describe('NoPropsComponent', () => {
  let component: NoPropsComponent;
  let fixture: ComponentFixture<NoPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
