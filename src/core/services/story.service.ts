import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import PaginatedDto from '../../shared/dtos/paginated.dto';
import StoryDto from '../../shared/dtos/story.dto';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private endpoint = 'v1/stories';
  private baseUrl: string | undefined;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getStories(pageIndex: number, pageSize: number, search: string) {
    return this.http.get<PaginatedDto<StoryDto>>(`${this.baseUrl}/${this.endpoint}?PageIndex=${pageIndex}&PageSize=${pageSize}&Search=${search}`);
  }
}
