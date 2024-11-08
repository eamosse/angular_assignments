import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appRender]',
  standalone: true
})
export class RenderDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = 'green';
  }
}


@Directive({
  selector: '[appNotRender]',
  standalone: true
})
export class NotRenderDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = 'red';
  }
}
