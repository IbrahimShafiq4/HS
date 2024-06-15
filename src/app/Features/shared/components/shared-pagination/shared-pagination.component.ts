import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-shared-pagination',
  templateUrl: './shared-pagination.component.html',
  styleUrls: ['./shared-pagination.component.scss'],
})
export class SharedPaginationComponent {
  @Input() totalNumOfRecords: number = 0;
  @Output() pageSizeChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageIndexChanged: EventEmitter<number> = new EventEmitter<number>();
  first: number = 0;
  rows: number = 10;
  size: number = 10;
  page: number = 1;

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.page = Math.floor(this.first / this.rows) + 1;
    this.size = this.rows;
  }
}
