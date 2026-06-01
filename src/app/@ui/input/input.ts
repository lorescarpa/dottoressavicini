import { computed, Directive, input } from '@angular/core';
import { NgpInput } from 'ng-primitives/input';

const baseClass = [
  'placeholder:text-olive-500 selection:bg-olive-500 border-olive-400 flex h-10 w-full min-w-0 rounded-md border bg-olive-800/10 sm:bg-olive-200/10 px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 md:text-sm',
  'data-[focus]:border-ring data-[focus]:ring-olive-200 data-[focus]:ring-[3px] caret-olive-500',
  'aria-invalid:ring-red-400/20 [&[data-touched][data-invalid]]:ring-red-400/20 [&[data-touched][data-invalid]]:border-red-400 aria-invalid:border-red-400',
].join(' ');

@Directive({
  selector: 'input[avInput], textarea[avInput]',
  exportAs: 'avInput',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpInput],
})
export class AvInput {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => baseClass + ' ' + this.inputClass());
}
