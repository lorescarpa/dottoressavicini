import { Component } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';

/**
 * The size of the button.
 */
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
/**
 * The variant of the button.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';

@Component({
  selector: 'button[av-button]',
  hostDirectives: [{ directive: NgpButton, inputs: ['disabled'] }],
  template: ` <ng-content /> `,
  host: {
    class:
      'w-full sm:w-auto inline-flex items-center justify-center rounded-md border-none bg-primary-500 px-4 py-2 font-extralight text-olive-50 shadow-sm ring-1 ring-olive-500/5 transition-colors duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 hover:bg-primary-600 data-[press]:bg-primary-700 disabled:pointer-events-none disabled:opacity-50',
  },
})
export default class Button {}
