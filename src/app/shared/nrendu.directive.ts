import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNrendu]'
})
export class NrenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="red";
   }

}
