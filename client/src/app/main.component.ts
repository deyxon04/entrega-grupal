import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public opcionSeleccionado;
  constructor(private router: Router) { }

  public documento;
  public password;


  ngOnInit() {
  }

  ngRegister() {
    console.log(this.password);
    console.log(this.documento);

    this.documento = "";
    this.password = "";
  }


  ngChange() {
    console.log(this.opcionSeleccionado);
    if (this.opcionSeleccionado == "Aspirante") {
      this.router.navigate(['/aspirante']);
    }
    if (this.opcionSeleccionado == "Coordinador") {
      this.router.navigate(['/coordinador']);
    }
    if (this.opcionSeleccionado == "Interesado") {
      this.router.navigate(['/interesado']);
    }
  }
}
