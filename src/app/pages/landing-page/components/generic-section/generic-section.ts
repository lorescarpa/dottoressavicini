import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../landing-page';
import Button from '../../../../@ui/button/button.component';

@Component({
  selector: 'av-generic-section',
  imports: [CommonModule, Button],
  templateUrl: './generic-section.html',
  styleUrl: './generic-section.scss',
})
export class GenericSection {
  readonly data = input<Section>();
  readonly clickEvent = output<string>();
}
