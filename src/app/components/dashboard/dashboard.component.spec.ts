import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent, EditorComponent } from '@sharedComponents';
import { Store, NgxsModule } from '@ngxs/store';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot()],
      declarations: [ DashboardComponent, EditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
