import { Component, output, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { AvInput } from '../../@ui/input/input';
import { AvError, AvFormField, AvLabel } from '../../@ui/form-field/form-field';
import Button from '../../@ui/button/button.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'av-contact-me-form',
  imports: [FormField, AvInput, AvFormField, AvLabel, Button],
  templateUrl: './contact-me-form.html',
  styleUrl: './contact-me-form.scss',
})
export class ContactMeForm {
  readonly discard = output<void>();

  readonly formModel = signal({
    email: '',
    name: '',
    message: '',
  });

  form = form(this.formModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    required(schemaPath.email, { message: 'Email is required' });
    required(schemaPath.message, { message: 'Message is required' });
    email(schemaPath.email, { message: 'Please enter a valid email address' });
  });
}
