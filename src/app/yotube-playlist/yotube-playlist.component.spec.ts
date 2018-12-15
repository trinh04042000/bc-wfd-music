import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YotubePlaylistComponent } from './yotube-playlist.component';

describe('YotubePlaylistComponent', () => {
  let component: YotubePlaylistComponent;
  let fixture: ComponentFixture<YotubePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YotubePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YotubePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
