import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
    selector: '[appInput]'
})
export class InputDirective {

    constructor(private _elementRef: ElementRef<HTMLInputElement>) {
    }

    @HostBinding('class.is-filled') get isFilled() {
        return this._elementRef.nativeElement.value;
    }

}
