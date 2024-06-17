import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormFields } from '../../models/shared';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shared-auth-layout',
  templateUrl: './shared-auth-layout.component.html',
  styleUrls: ['./shared-auth-layout.component.scss'],
  animations: [
    trigger('slideInFormRight', [
      transition(':enter', [
        style({transform: 'translateX(150%)'}),
        animate(`500ms {{delay}} ease-in`, style({transform: 'none'})),
      ], { params: {delay: '1000ms'} }),
      transition(':leave', [
        style({transform: 'none'}),
        animate(`500ms {{delay}} ease-in`, style({transform: 'translateX(150%)'})),
      ], { params: {delay: '1000ms'} })
    ])
  ]
})
export class SharedAuthLayoutComponent {
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  imageVisibility: boolean = true;
  files: File[] = [];

  @Input() imageSrc: string = '';
  @Input() imageTitle: string = '';
  @Input() componentTitle: string = '';
  @Input() componentText: string = '';
  @Input() componentNavigation: string = '';
  @Input() componentNavigationText: string = '';
  @Input() authForm: FormGroup = new FormGroup({});
  @Input() navigationTo: string = '';
  @Input() navigationToText: string = '';
  @Input() btnText: string = '';
  @Input() formFields!: IFormFields[];
  @Output() formSubmission: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Input() formName: string = '';

  userToken: string = localStorage.getItem('userToken') ?? '';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
  }

  onSubmitForm(authForm: FormGroup) {
    if (authForm.valid) {
      this.formSubmission.emit(authForm);
    }
  }

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
