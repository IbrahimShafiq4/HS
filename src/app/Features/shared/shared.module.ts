import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { SharedCardComponent } from './components/shared-card/shared-card.component';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { SharedAuthLayoutComponent } from './components/shared-auth-layout/shared-auth-layout.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgxDropzoneModule,
  ],
  declarations: [
    SharedTableComponent,
    SharedCardComponent,
    SharedHeaderComponent,
    SharedAuthLayoutComponent,
  ],
  exports: [
    SharedTableComponent,
    SharedCardComponent,
    SharedHeaderComponent,
    SharedAuthLayoutComponent,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
})
export class SharedModule {}
