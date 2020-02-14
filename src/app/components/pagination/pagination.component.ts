import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent{
  private todoList: object[] = [];
  private maxSizePagination: string = '6';

  private paginationConfig: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 6,
    currentPage: 1
  };

  private labels: object = {
    previousLabel: 'Back',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  private onPageChange(number: number) {
    this.paginationConfig.currentPage = number;
  }

  ngOnInit() {
    for (let i = 0; i <= 30; i++) {
      this.todoList.push({
        id: i,
        title: `Home Work ${i}`,
        completed: false
      });
    }
  }
}
