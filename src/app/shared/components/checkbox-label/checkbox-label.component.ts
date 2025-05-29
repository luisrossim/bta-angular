import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-checkbox-label',
  imports: [CommonModule, CheckboxModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="flex items-center gap-2">
      <p-checkbox [formControlName]="model" [binary]="true" />
      <p class="text-slate-700 font-medium">{{ label }}</p>
    </div>
  `
})
export class CheckboxLabelComponent {
  @Input() label!: string
  @Input() model!: string
}
