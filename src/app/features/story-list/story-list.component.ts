import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import PaginatedDto from '../../../shared/dtos/paginated.dto';
import StoryDTO from '../../../shared/dtos/story.dto';
import { PageEvent } from '@angular/material/paginator';
import { StoryService } from '../../../core/services/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.css'
})
export class StoryListComponent implements OnInit {
  public pageSize: number;
  public pageIndex: number;
  public totalData: number;
  public isLoading: boolean;
  public search: string;
  public title: string;

  public pageSizeOptions: Array<number>;
  public displayedColumns: Array<string>;

  public dataSource = new MatTableDataSource<StoryDTO>();

  constructor(private storyService: StoryService) {
    this.pageSize = 10;
    this.pageIndex = 1;
    this.totalData = 0;
    this.isLoading = false;
    this.search = "";
    this.title = "Coding Challenge Endava";

    this.pageSizeOptions = [5, 10, 25, 100];
    this.displayedColumns = ['id', 'title', 'url'];
  }

  ngOnInit(): void {
    this.getStories();
  }

  getStories() {
    this.isLoading = true;
    this.storyService.getStories(this.pageIndex, this.pageSize, this.search).subscribe(
      (res: PaginatedDto<StoryDTO>) => {
        if (res && res.items && res.totalItems) {
          this.dataSource.data = res.items;
          this.totalData = res.totalItems;
        } else {
          this.dataSource.data = new Array<StoryDTO>();
          this.totalData = 0;
        }
      })
  }

  handlePageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex + 1;
    this.getStories();
  }

  handleSearch() {
    this.pageSize = 10;
    this.pageIndex = 1;
    this.getStories();
  }
}
