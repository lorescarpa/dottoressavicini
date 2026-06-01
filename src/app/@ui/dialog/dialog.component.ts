import { Component, input, ChangeDetectionStrategy, output } from '@angular/core';
import {
  NgpDialog,
  NgpDialogDescription,
  NgpDialogOverlay,
  NgpDialogTitle,
  provideDialogState,
} from 'ng-primitives/dialog';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'av-dialog',
  hostDirectives: [NgpDialogOverlay],
  imports: [NgpDialog, NgpDialogTitle, NgpDialogDescription],
  providers: [
    // We need to hoist the dialog state to the host component so that it can be used
    // within ng-content
    provideDialogState(),
  ],
  template: `
    <div
      class="w-full h-[90%] sm:h-auto flex flex-col items-center gap-6 max-w-2xl rounded-t-xl sm:rounded-xl bg-olive-100 sm:bg-gradient-to-t sm:from-olive-900 sm:to-olive-800 p-6 pt-3 sm:pt-6 shadow-xl animate-slide-in data-[exit]:animate-slide-out"
      ngpDialog
    >
      <button
        class="bg-zinc-800 h-1 w-10 rounded-full block sm:hidden"
        (click)="close.emit()"
      ></button>
      <h2
        class="mb-1 text-2xl font-semibold font-italiana text-olive-600 sm:text-olive-100"
        ngpDialogTitle
      >
        {{ header() }}
      </h2>
      <p ngpDialogDescription>
        <ng-content />
      </p>
    </div>
  `,
  host: {
    class:
      'fixed inset-0 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in data-[exit]:animate-fade-out',
  },
  styles: `
    /* These styles rely on CSS variables that can be imported from ng-primitives/example-theme/index.css in your global styles */
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes slideIn {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      0% {
        transform: translateY(0);
        opacity: 1;
      }

      100% {
        transform: translateY(-20px);
        opacity: 0;
      }
    }
  `,
})
export class DialogComponent {
  /** The dialog title */
  readonly header = input.required<string>();

  readonly close = output<void>();
}
