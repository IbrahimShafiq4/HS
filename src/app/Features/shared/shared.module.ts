import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { SharedCardComponent } from './components/shared-card/shared-card.component';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { SharedAuthLayoutComponent } from './components/shared-auth-layout/shared-auth-layout.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TranslateModule } from '@ngx-translate/core';
import { SharedPaginationComponent } from './components/shared-pagination/shared-pagination.component';
import { SharedSearchComponent } from './components/shared-search/shared-search.component';
import { PaginatorModule } from 'primeng/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DynamicDatePipe } from './pipes/dynamic-date.pipe';
import { HelperService } from './services/helper.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgxDropzoneModule,
    FormsModule,
    PaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  declarations: [
    SharedTableComponent,
    SharedCardComponent,
    SharedHeaderComponent,
    SharedAuthLayoutComponent,
    SharedPaginationComponent,
    SharedSearchComponent,
    DynamicDatePipe
  ],
  exports: [
    SharedTableComponent,
    SharedCardComponent,
    SharedHeaderComponent,
    SharedAuthLayoutComponent,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    SharedPaginationComponent,
    SharedSearchComponent,
    FormsModule,
    PaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    DynamicDatePipe
  ],
  providers: [HelperService]
})
export class SharedModule {}
