import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from 'src/app/service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css'],
})
export class VillainsComponent implements OnInit {
  // hero:any[]=[];
  hero: Hero[] = [];
  constructor(private _heroService: HeroService, private _router: Router) {}

  ngOnInit(): void {
    this.hero = this._heroService.getHeros();
    console.log(this.hero);
  }

  verHeroe(id: number) {
    this._router.navigate(['/detalles2', id]);
  }
}
