import { Component, ElementRef, Input } from '@angular/core';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';


@Component({
  selector: 'ng-overlay',
  templateUrl: './ng-overlay.component.html',
  styleUrls: ['./ng-overlay.component.scss']
})

export class NgOverlayComponent {

  @Input() origin: CdkOverlayOrigin;
  @Input() isOpen = false;

  private position: string = null;

  constructor(private elementRef: ElementRef) {}

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  determinePosition(offsetY: number) {
    if (this.elementRef.nativeElement.offsetY < offsetY) {
      this.position = 'above';
    } else {
      this.position = 'below';
    }
  }

  get positionClass(): {} {
    return {
      'above': this.position === 'above',
      'below': this.position === 'below'
    };
  }
}


