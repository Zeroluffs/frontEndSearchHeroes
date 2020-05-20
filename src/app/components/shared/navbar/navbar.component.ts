import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private _heroService: HeroService, private _router: Router) {}

  ngOnInit(): void {}
  buscarHeroe(id: string) {
    console.log(id);
    this._router.navigate(['/buscar', id]);
    // Reenviar datos a un componente nuevo llamado busquedaHeroe en componente instanciar el servicio y consultar el metodo buscar heroe
  }
}
