import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgpDialogTrigger } from 'ng-primitives/dialog';
import { DialogComponent } from '../../@ui/dialog/dialog.component';
import Button from '../../@ui/button/button.component';
import { ContactMeForm } from '../contact-me-form/contact-me-form';

@Component({
  selector: 'av-footer',
  imports: [
    CommonModule,
    DialogComponent,
    // NgpDialogTrigger,
    // Button,
    ContactMeForm,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
