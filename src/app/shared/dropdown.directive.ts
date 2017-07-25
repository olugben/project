import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen: boolean = false;

  constructor(private elRef: ElementRef) {

  }

  @HostListener('click') showDropDown() {
    this.isOpen = !this.isOpen;
  }
}
