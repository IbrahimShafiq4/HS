import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent {
  @Input() mainHeader: string = '';
  @Input() mainHeaderText: string = '';
  @Input() btnVisibility: boolean = false;
  @Input() btnText: string = '';
  @Input() btnNavigation: string = '';
  @Input() goBackNavigation: string = '';
  @Input() goBackText: string = '';
  @Input() goBackMainText: string = '';
}
