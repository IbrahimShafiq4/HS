import { Component, EventEmitter, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-shared-pagination',
  templateUrl: './shared-pagination.component.html',
  styleUrls: ['./shared-pagination.component.scss']
})
export class SharedPaginationComponent {
  @Output() pageSizeChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageIndexChanged: EventEmitter<number> = new EventEmitter<number>();
  page: number = 1;
  size: number = 10;

  hanglePageEvent(event: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.pageIndexChanged.emit(this.page);
    this.pageSizeChanged.emit(this.size);
  }
}
