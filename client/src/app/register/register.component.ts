import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public nombre;
  public documento;
  public correo;
  public telefono;
  public contrasena;

  constructor(private _http: HttpClient) { }

  ngRegistrar() {
    let json = ({
      documento: this.documento,
      nombre: this.nombre,
      corre: this.correo,
      contrasena: this.contrasena,
      telefono: this.telefono
    })

    let params = "json=" + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    this._http.post('http://localhost:3000/registrar', json, { headers: headers }).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
