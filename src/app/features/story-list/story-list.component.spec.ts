import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryListComponent } from './story-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoryService } from '../../../core/services/story.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environment/environment';
import { AppModule } from '../../app.module';


describe('StoryListComponent', () => {
  let component: StoryListComponent;
  let fixture: ComponentFixture<StoryListComponent>;
  let storyService: StoryService;
  let httpTestingController: HttpTestingController;
  const baseUrl: string = environment.baseUrl;
  const endpoint: string = 'v1/stories';
  const app = {
    pageIndex: 1,
    pageSize: 10,
    search: ""
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StoryListComponent
      ],
      providers: [
        provideAnimationsAsync()
      ],
      imports: [
        AppModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StoryListComponent);
    component = fixture.componentInstance;
    storyService = TestBed.inject(StoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Coding Challenge Endava'`, (() => {
    const fixture = TestBed.createComponent(StoryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Coding Challenge Endava');
  }));

  it(`should have as title 'Coding Challenge Endava'`, (() => {
    const fixture = TestBed.createComponent(StoryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Coding Challenge Endava');
  }));

  it(`should have as pageSize '10'`, (() => {
    const fixture = TestBed.createComponent(StoryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pageSize).toEqual(10);
  }));

  it(`should have as pageIndex '1'`, (() => {
    const fixture = TestBed.createComponent(StoryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pageIndex).toEqual(1);
  }));

  it(`should have as totalData '0'`, (() => {
    const fixture = TestBed.createComponent(StoryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.totalData).toEqual(0);
  }));

  it(`should have as isLoading 'false'`, (() => {
    const fixture = TestBed.createComponent(StoryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.isLoading).toEqual(false);
  }));

  it(`should have as search ''`, (() => {
    const fixture = TestBed.createComponent(StoryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.search).toEqual('');
  }));

  it(`should have as pageSizeOptions '[5, 10, 25, 100]'`, (() => {
    const fixture = TestBed.createComponent(StoryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pageSizeOptions).toEqual([5, 10, 25, 100]);
  }));

  it(`should have as displayedColumns '['id', 'title', 'url']'`, (() => {
    const fixture = TestBed.createComponent(StoryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.displayedColumns).toEqual(['id', 'title', 'url']);
  }));

  it("service should have created successfully", () => {
    expect(storyService).toBeTruthy();
  });

  it('can test ngOnInit initial call', (done) => {
    fixture.detectChanges();
    const req = httpTestingController.expectOne(req => req.method === "GET" && req.urlWithParams === `${baseUrl}/${endpoint}?PageIndex=${app.pageIndex}&PageSize=${app.pageSize}&Search=${app.search}`);
    expect(req.request.method).toEqual('GET');
    httpTestingController.verify();
    done();
  });

  it('can test storyService.getStories', (done) => {
    storyService.getStories(app.pageIndex, app.pageSize, app.search)
      .subscribe();
    const req = httpTestingController.expectOne(req => req.method === "GET" && req.urlWithParams === `${baseUrl}/${endpoint}?PageIndex=${app.pageIndex}&PageSize=${app.pageSize}&Search=${app.search}`);
    expect(req.request.method).toEqual('GET');
    httpTestingController.verify();
    done();
  });
});