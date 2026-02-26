import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YumeNikki } from './yume-nikki';

describe('YumeNikki', () => {
  let component: YumeNikki;
  let fixture: ComponentFixture<YumeNikki>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YumeNikki]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YumeNikki);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
