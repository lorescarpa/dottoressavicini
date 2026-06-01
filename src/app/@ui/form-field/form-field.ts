import { computed, Directive, input } from '@angular/core';
import {
  NgpFormField,
  NgpLabel,
  NgpDescription,
  NgpError,
} from 'ng-primitives/form-field';

const formFieldClasses = {
  field: '',
  label:
    'flex items-center gap-2 text-sm leading-none font-medium select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 peer-data-[disabled]:cursor-not-allowed peer-data-[disabled]:opacity-50',
  description: 'text-sm text-muted-foreground',
  error: 'text-sm font-medium text-red-400',
};

const { field, label, description, error } = formFieldClasses;

@Directive({
  selector: '[avFormField]',
  exportAs: 'avFormField',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpFormField],
})
export class AvFormField {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => field + ' ' + this.inputClass());
}

@Directive({
  selector: '[avLabel]',
  exportAs: 'avLabel',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpLabel],
})
export class AvLabel {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => label + ' ' + this.inputClass());
}

@Directive({
  selector: '[avDescription]',
  exportAs: 'avDescription',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpDescription],
})
export class AvDescription {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => description + ' ' + this.inputClass());
}

@Directive({
  selector: '[avError]',
  exportAs: 'avError',
  host: {
    '[class]': 'computedClass()',
  },
  hostDirectives: [NgpError],
})
export class AvError {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => error + ' ' + this.inputClass());
}
