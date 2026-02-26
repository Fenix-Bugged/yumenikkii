import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yume-nikki',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './yume-nikki.html',
  styleUrls: ['./yume-nikki.css']
})
export class YumeNikkiComponent implements OnInit, OnDestroy {

  dreamData = {
    nombre: '',
    descripcion: ''
  };

  enviado = false;

  ngOnInit() {
    document.body.classList.add('dark-page');
  }

  ngOnDestroy() {
    document.body.classList.remove('dark-page');
  }

  onSubmit(form: NgForm) {

    this.enviado = true;

    if (form.valid) {

      console.log("Sueño enviado:", this.dreamData);

      alert("Sueño enviado correctamente");

      form.resetForm();

      this.enviado = false;

    }

  }

}