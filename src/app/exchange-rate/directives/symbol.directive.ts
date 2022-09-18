import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Directive({
  selector: '[appSymbol]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SymbolDirective,
    multi: true
  }]
})
export class SymbolDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    let value = $event.target.value

    value = value.replace(/([^a-zà-úA-ZÀ-Ú ]|[äåæËÎÏÐðÑ×÷ØÝÞß])/, '')

    $event.target.value = value
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

}
