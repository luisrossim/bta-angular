import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { ToastService } from '../../services/toast.service';
import { OrdemService } from '../../../core/services/ordem.service';

@Component({
  selector: 'app-upload-file',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Button],
  templateUrl: './upload-file.component.html'
})
export class UploadFileComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly toastService = inject(ToastService);
  private readonly ordemService = inject(OrdemService);
  form!: FormGroup;


  constructor(){
    this.initializeForm();
  }


  private initializeForm(){
    this.form = this.formBuilder.group({
      image: [null, [Validators.required]]
    })
  }

  
  protected onSubmit(){
    if (this.form.invalid){
      this.toastService.error("Formulário inválido.");
      return;
    }

    const formData = new FormData();
    formData.append('image', this.form.get('image')?.value);
    
    this.ordemService.uploadArquivo("test-id", formData).subscribe({
      next: () => {
        this.toastService.success("Imagem anexada com sucesso.")
      },
      error: () => {
        this.toastService.error("Erro ao anexar a imagem.")
      }
    })
  }


  protected onFileChange(event: Event){
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      const file = input.files[0];

      if (!this.fileTypeIsValid(file)){
        this.toastService.error("Apenas arquivos .jpg, .png ou .pdf são permitidos.");
        input.value = "";
        this.form.patchValue({ image: null });
        return;
      }

      if (!this.fileSizeIsValid(file)) {
        this.toastService.error("A imagem excede o tamanho máximo permitido de 5 MB");
        input.value = "";
        this.form.patchValue({ image: null });
        return;
      }

      this.form.patchValue({ image: file });
    }
  }


  fileTypeIsValid(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    return allowedTypes.includes(file.type);
  }

  fileSizeIsValid(file: File): boolean {
    const maxSizeInBytes = 5 * 1024 * 1024;
    return file.size <= maxSizeInBytes;
  }
}
