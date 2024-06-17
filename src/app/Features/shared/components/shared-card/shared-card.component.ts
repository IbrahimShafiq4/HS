import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss'],
})
export class SharedCardComponent implements AfterViewInit {
  @ViewChild('mainImage', { static: true }) mainImage!: ElementRef<HTMLImageElement>;
  @ViewChildren('smallImg') smallImages!: QueryList<ElementRef<HTMLImageElement>>;

  smallImageSrcs: string[] = [
    '../../../../../assets/images/auth/forget.png',
    '../../../../../assets/images/auth/reset.png',
    '../../../../../assets/images/auth/signin.png',
    '../../../../../assets/images/auth/signup.png'
  ];

  ngAfterViewInit() {
    this.smallImages.forEach((smallImg) => {
      smallImg.nativeElement.addEventListener('click', () => {
        this.updateMainImage(smallImg.nativeElement.src);
      });
    });
  }

  updateMainImage(src: string) {
    if (this.mainImage && this.mainImage.nativeElement) {
      this.mainImage.nativeElement.src = src;
    }
  }
}

