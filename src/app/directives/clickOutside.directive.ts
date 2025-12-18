import { Directive, ElementRef, Output, Input, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  @Input() excludeElement?: HTMLElement;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    const clickedOnExcluded = this.excludeElement && this.excludeElement.contains(targetElement);
  
    if (!clickedInside && !clickedOnExcluded) {
      this.clickOutside.emit();
    }
  }
}